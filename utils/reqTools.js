module.exports = {
    GetDevice: function (ctx, deviceConfig) {
        return ctx.st.devices.getDeviceStatus(deviceConfig.id)
            .then(deviceStatus => {
                    let result = ctx.sensorParse[deviceConfig.parser](deviceStatus);
                    return (result);
                }
            );
    }
};
