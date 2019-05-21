
module.exports = {
    thermostat: function(deviceStatus) {
        return {
            humidity: deviceStatus.components.main.relativeHumidityMeasurement.humidity.value,
            temperature: deviceStatus.components.main.temperatureMeasurement.temperature.value,
            setpoint: deviceStatus.components.main.thermostat.thermostatSetpoint.value,
            heatingSetpoint: deviceStatus.components.main.thermostat.heatingSetpoint.value,
            coolingSetpoint: deviceStatus.components.main.thermostat.coolingSetpoint.value,
            operatingState: deviceStatus.components.main.thermostat.thermostatOperatingState.value,
            mode: deviceStatus.components.main.thermostat.thermostatMode.value,
            fanMode: deviceStatus.components.main.thermostat.thermostatFanMode.value
        };
    },

    switch: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
        };
    },
    dimmer: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
        };
    },
    multiColorLed: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
        };
    },
    samsungMotion: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
        };
    },
    triSensor: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
        };
    },
    button: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
        };
    },
};
