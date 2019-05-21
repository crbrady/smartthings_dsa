"use strict";

const config = require('./config.js');

console.log(config);

const CronJob = require('cron').CronJob;
const smartthings = require("smartthings-node");
const st = new smartthings.SmartThings(config.token);



let cron1sec = new CronJob('*/1 * * * * *', function() {
    //console.log('1 second');
    pollTier1();
}, null, true, 'America/Denver');

let cron5sec = new CronJob('*/5 * * * * *', function() {
    console.log('5 second');
    pollTier2();
}, null, true, 'America/Denver');

let cron30sec = new CronJob('*/30 * * * * *', function() {
    console.log('30 second');
    pollTier3();
}, null, true, 'America/Denver');

let cron1min = new CronJob('0 */1 * * * *', function() {
    console.log('1 minute');
    pollTier4();
}, null, true, 'America/Denver');

let cron15min = new CronJob('0 */15 * * * *', function() {
    console.log('15 minute');
    pollTier5();
}, null, true, 'America/Denver');

let cron1hr = new CronJob('0 0 */1 * * *', function() {
    console.log('1 hour');
    pollTier6();
}, null, true, 'America/Denver');




function pollTier1(){// 1 sec


}

let itr = 0;
function pollTier2(){// 5 sec
    getThermostat();
    if(itr === 0){
        let commands = [
            {
                "setColorTemperature": "main",
                "capability": "colorTemperature",
                "command": "setColorTemperature",
                "arguments": [3500
                ]
            }
        ];
        st.devices.executeDeviceCommand(config..id,commands);
    }
    itr = (itr < 3) ? itr+1 : 0;
}

function pollTier3(){// 30 sec

}

function pollTier4(){// 1 min

}

function pollTier5(){// 15 min

}

function pollTier6(){// 1 hr

}

pollTier1();
pollTier2();
pollTier3();
pollTier4();
pollTier5();
pollTier6();

st.devices.getDeviceStatus(config.hall_thermostat.id)
    .then(deviceStatus => {
        console.log(JSON.stringify(deviceStatus));
    });
function getThermostat(){
    st.devices.getDeviceStatus(config.hall_thermostat.id)
        .then(deviceStatus => {

            console.log(thermo);
        });
}
function getOfficeWallSwitch(){
    st.devices.getDeviceStatus(config.office_wall_switch.id)
    .then(deviceStatus => {
        let wallSwitch = {
            switch: deviceStatus.components.main.switch.switch.value,
            //         temperature: deviceStatus.components.main.temperatureMeasurement.temperature.value,
            //         setpoint: deviceStatus.components.main.thermostat.thermostatSetpoint.value,
            //         heatingSetpoint: deviceStatus.components.main.thermostat.heatingSetpoint.value,
            //         coolingSetpoint: deviceStatus.components.main.thermostat.coolingSetpoint.value,
            //         operatingState: deviceStatus.components.main.thermostat.thermostatOperatingState.value,
            //         mode: deviceStatus.components.main.thermostat.thermostatMode.value,
            //         fanMode: deviceStatus.components.main.thermostat.thermostatFanMode.value
        };
        console.log(wallSwitch);
    });
}




