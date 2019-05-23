let prettyjson = require("prettyjson");

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
    plugSwitch: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
        };
    },
    dimmer: function(deviceStatus) {
        return {
            switch: deviceStatus.components.main.switch.switch.value,
            switchLevel: deviceStatus.components.main.switchLevel.level.value
        };
    },
    multiColorLed: function(deviceStatus) {
        //console.log(prettyjson.render(deviceStatus, {}));
        return {
            switch: deviceStatus.components.main.switch.switch.value,
            colorSat: deviceStatus.components.main.colorControl.saturation.value,
            colorHue: deviceStatus.components.main.colorControl.hue.value,
            switchLevel: deviceStatus.components.main.switchLevel.level.value,
            colorTemperature: deviceStatus.components.main.colorTemperature.colorTemperature.value,
        };
    },
    samsungMotion: function(deviceStatus) {
        console.log(deviceStatus.components.main);
        return {
            //switch: deviceStatus.components.main.switch.switch.value,
        };
    },
    triSensor: function(deviceStatus) {
        return {
            temperature: deviceStatus.components.main.temperatureMeasurement.temperature.value,
            illuminance: deviceStatus.components.main.illuminanceMeasurement.illuminance.value,
            motion: deviceStatus.components.main.motionSensor.motion.value
        };
    },
    button: function(deviceStatus) {
        return {

        };
    },
    phone: function(deviceStatus) {
        return {
            presence: deviceStatus.components.main.presenceSensor.presence.value,
            occupancy: deviceStatus.components.main.occupancySensor.occupancy.value,
        };
    },
    waterLeak: function(deviceStatus) {
        //console.log(deviceStatus.components.main);
        return {
            temperature: deviceStatus.components.main.temperatureMeasurement.temperature.value,
            water: deviceStatus.components.main.waterSensor.water.value
        };
    }
};
