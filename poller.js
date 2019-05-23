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
    pollTier3();
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

function pollTier0(){// .5 sec

}

function pollTier1(){// 1 sec

}

async function pollTier2(){// 2 sec
    //let kitchenLights = await taskRunner(getStatus.kitchenLights, 'Kitchen Lights',ctx);
    //console.log(kitchenLights);

    //let hallDimmer = await taskRunner(getStatus.hallDimmer,'HallDimmer',ctx);
    //console.log(hallDimmer);

    //let officeTriSensor = await taskRunner(getStatus.officeTri,'officeTri',ctx);
    //console.log(officeTriSensor);

    // let officeWallSwitch = await taskRunner(getStatus.officeWallSwitch,'officeWallSwitch',ctx);
    // console.log(officeWallSwitch);

    // let masterClosetDimmer = await taskRunner(getStatus.masterClosetDimmer,'masterClosetDimmer',ctx);
    // console.log(masterClosetDimmer);

    // let hallThermo = await taskRunner(getStatus.hallThermostat,'HallThermo',ctx);
    // console.log(hallThermo);

    // let laundryLeak = await taskRunner(getStatus.laundryLeak,'laundryLeak',ctx);
    // console.log(laundryLeak);

    // let georgeSwitch = await taskRunner(getStatus.georgeSwitch,'georgeSwitch',ctx);
    // console.log(georgeSwitch);

    let ryanPhone = await taskRunner(getStatus.ryanPhone,'ryanPhone',ctx);
    console.log(ryanPhone);


}

function pollTier3(){// 5 sec

}

function pollTier4(){// 15 sec

}

function pollTier5(){// 30 sec

}

function pollTier6(){// 1 min

}

function pollTier7(){// 15 min

}

function pollTier8(){// 1 hr

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

