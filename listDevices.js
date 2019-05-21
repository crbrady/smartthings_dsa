const smartthings = require("smartthings-node");
let st = new smartthings.SmartThings("777be641-2c74-4b05-810b-ca0cd8dde649");

st.devices.listDevices()
    .then(deviceList => {
        for(let i = 0; i < deviceList.items.length;i++){
            if(deviceList.items[i].deviceId == "e17960dc-c6ef-4ba2-8ea9-ed67524607c9"){
                console.log(JSON.stringify(deviceList.items[i]));

            }
            console.log(deviceList.items[i].label + "  -  " + deviceList.items[i].deviceId);
        }
        //console.log(JSON.stringify(deviceList));
    });
// st.devices.listDevicesByCapability()
//     .then(deviceList => {
//         console.log(JSON.stringify(deviceList));
//     });
