const DS = require('dslink');
let link = new DS.LinkProvider(process.argv.slice(2), 'SmartThings-');
const config = require('./config.js');
const reqTools = require('./utils/reqTools.js');
const getStatus = require('./utils/getStatus.js');

const CronJob = require('cron').CronJob;
const smartthings = require("smartthings-node");
const st = new smartthings.SmartThings(process.env.token);
const TIMEZONE = 'America/Denver';

let ctx = {
    config: config,
    reqTools: reqTools,
    st: st,
    sensorParse: require('./utils/sensorParse.js')
};

let cron1sec = new CronJob('*/1 * * * * *', ()=> {
    pollTier0();
    setTimeout(()=> {
        pollTier0();
    }, 500);
    pollTier1();
}, null, true, TIMEZONE);

let cron2sec = new CronJob('*/2 * * * * *', ()=> {
    pollTier2();
}, null, true, TIMEZONE);

let cron5sec = new CronJob('*/5 * * * * *', ()=> {
    pollTier3();
}, null, true, TIMEZONE);

let cron15sec = new CronJob('*/15 * * * * *', ()=> {
    pollTier4();
}, null, true, TIMEZONE);

let cron30sec = new CronJob('*/30 * * * * *', ()=> {
    pollTier5();
}, null, true, TIMEZONE);

let cron1min = new CronJob('0 */1 * * * *', ()=> {
    pollTier6();
}, null, true, TIMEZONE);

let cron15min = new CronJob('0 */15 * * * *', ()=> {
    pollTier7();
}, null, true, TIMEZONE);

let cron1hr = new CronJob('0 0 */1 * * *', ()=> {
    pollTier8();
}, null, true, TIMEZONE);

async function pollTier0(){// .5 sec
    let officeTriSensor = await taskRunner(getStatus.officeTri,'Office Tri',ctx);
    setDsa(links['officeTriSensor'], officeTriSensor);

    let button = await taskRunner(getStatus.button,'Button',ctx);
    setDsa(links['button'], button);
}

async function pollTier1(){// 1 sec

}

async function pollTier2(){// 2 sec
    let kitchenLights = await taskRunner(getStatus.kitchenLights, 'Kitchen Lights',ctx);
    setDsa(links['kitchenLights'], kitchenLights);

    //let hallMotion = await taskRunner(getStatus.hallMotion, 'Hall Motion',ctx);
    //setDsa(links['hallMotion'], hallMotion);

    setTimeout(async ()=> {
        let hallDimmer = await taskRunner(getStatus.hallDimmer,'Hall Dimmer',ctx);
        setDsa(links['hallDimmer'], hallDimmer);

        let officeWallSwitch = await taskRunner(getStatus.officeWallSwitch,'Office Wall Switch',ctx);
        setDsa(links['officeWallSwitch'], officeWallSwitch);

        let masterClosetDimmer = await taskRunner(getStatus.masterClosetDimmer,'Master Closet Dimmer',ctx);
        setDsa(links['masterClosetDimmer'], masterClosetDimmer);
    }, 1000);
}

async function pollTier3(){// 5 sec

}

async function pollTier4(){// 15 sec
    let ryanPhone = await taskRunner(getStatus.ryanPhone,'Ryan Phone',ctx);
    setDsa(links['ryanPhone'], ryanPhone);

    let georgeSwitch = await taskRunner(getStatus.georgeSwitch,'George Switch',ctx);
    setDsa(links['georgeSwitch'], georgeSwitch);
}

async function pollTier5(){// 30 sec
    let hallThermostat = await taskRunner(getStatus.hallThermostat,'Hall Thermostat',ctx);
    setDsa(links['hallThermostat'], hallThermostat);

    let laundryLeak = await taskRunner(getStatus.laundryLeak,'Laundry Leak',ctx);
    setDsa(links['laundryLeak'], laundryLeak);
}

async function pollTier6(){// 1 min

}

async function pollTier7(){// 15 min

}

async function pollTier8(){// 1 hr

}


pollTier1();
pollTier2();
pollTier3();
pollTier4();
pollTier5();
pollTier6();
pollTier7();
pollTier8();


async function taskRunner(fn, label, ctx) {
    console.time(`Task ${label}: `);
    let result = await fn(ctx);
    console.timeEnd(`Task ${label}: `);
    return result;
}





function setDsa(linkRef, payload){
    linkRef.updateValue(JSON.stringify(payload));
}




function makeJsonLink(nodeEndpoint, name){
    return link.addNode('/'+nodeEndpoint, {
        '$name': name,
        '$type': 'string',
        '?value': "[]"
    });
}

function makeLinksFromConfig(config){
    let thisLinks = {};
    let dsaLinkKeys = Object.keys(config.links);
    for(let i = 0; i < dsaLinkKeys.length;i++){
        let thisKey = dsaLinkKeys[i];
        thisLinks[thisKey] = makeJsonLink(config.links[thisKey].link_path, config.links[thisKey].link_name);
    }
    return thisLinks;
    //console.log(Object.keys(thisLinks));
}

let links = makeLinksFromConfig(config);


// makeJsonLink('kitchenLights', 'Kitchen Lights');
// makeJsonLink('hallDimmer', 'Hall Dimmer');
// makeJsonLink('officeTri', 'Office Tri');
// makeJsonLink('georgeSwitch', 'George Switch');
// makeJsonLink('ryanPhone', 'ryanPhone');
// makeJsonLink('hallDimmer', 'Hall Dimmer');

link.connect();





// let commands = [
//     {
//         "setColorTemperature": "main",
//         "capability": "colorTemperature",
//         "command": "setColorTemperature",
//         "arguments": [3500
//         ]
//     }
// ];
// st.devices.executeDeviceCommand(config.kitchen_can1.id,commands);

