const express    = require('express');
const SmartApp   = require('@smartthings/smartapp');
const server     = module.exports = express();
const PORT       = 3005;

server.use(express.json());

const WALL_SWITCH_ID = "90290562-3ebb-43ad-acea-de24d43fe078";

/* Define the SmartApp */
const smartapp = new SmartApp()
    // @smartthings_rsa.pub is your on-disk public key
    // If you do not have it yet, omit publicKey()
    .publicKey('@smartthings_rsa.pub') // optional until app verified
    .enableEventLogging(2) // logs all lifecycle event requests and responses as pretty-printed JSON. Omit in production
    .configureI18n()
    .page('mainPage', (context, page, configData) => {
        page.section('sensors', section => {
           section
            .deviceSetting('motionSensor')
            .capabilities(['motionSensor'])
            .required(false);
        });
        page.section('lights', section => {
            section
                .deviceSetting('lights')
                .capabilities(['switch'])
                .multiple(true)
                .permissions('rx');
        });
    })
    .updated(async (context, updateData) => {
        // Called for both INSTALLED and UPDATED lifecycle events if there is no separate installed() handler
        await context.api.subscriptions.unsubscribeAll();
        //await context.api.subscriptions.subscribeToDevices(WALL_SWITCH_ID, 'switch', 'switch', 'wallSwitchEvent');
        return context.api.subscriptions.subscribeToDevices(context.config.contactSensor, 'switch', 'switch', 'myDeviceEventHandler');
    })
    .subscribedEventHandler('wallSwitchEvent', (context, event) => {
        console.log("awesome");
        //context.api.devices.sendCommands(context.config.lights, 'switch', value);
    })
    .subscribedEventHandler('myDeviceEventHandler', (context, event) => {
        console.log("TRIGGER");
        const value = event.value === 'open' ? 'on' : 'off';
        context.api.devices.sendCommands(context.config.lights, 'switch', value);
    });
    // .subscribedEventHandler('myDeviceEventHandler', (context, event) => {
    //     const value = event.value === 'open' ? 'on' : 'off';
    //     context.api.devices.sendCommands(context.config.lights, 'switch', value);
    // });

/* Handle POST requests */
server.post('/', function(req, res, next) {
    console.log("GOT POST1");
  smartapp.handleHttpCallback(req, res);
});
server.post('/outside', function(req, res, next) {
    console.log("GOT POST2");
    return;
});

/* Start listening at your defined PORT */
server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
