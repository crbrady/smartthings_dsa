module.exports = {
    kitchenLights: async function (ctx) {
        let devices = ctx.config.devices;

        const task1 = ctx.reqTools.GetDevice(ctx, devices.kitchen_can1);
        const task2 = ctx.reqTools.GetDevice(ctx, devices.kitchen_can2);
        const task3 = ctx.reqTools.GetDevice(ctx, devices.kitchen_can3);
        const task4 = ctx.reqTools.GetDevice(ctx, devices.kitchen_can4);

        return {
            kitchen_can1: await task1,
            kitchen_can2: await task2,
            kitchen_can3: await task3,
            kitchen_can4: await task4
        }
    },
    hallDimmer: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.hall_dimmer);
        return {
            hallDimmer: await task1
        }
    },
    hallMotion: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.hall_motion);
        return {
            hallMimmer: await task1
        }
    },
    hallThermostat: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.hall_thermostat);
        return {
            hallThermo: await task1
        }
    },
    officeTri: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.office_tri_sensor);
        return {
            officeTri: await task1
        }
    },
    officeWallSwitch: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.office_wall_switch);
        return {
            hall_dimmer: await task1
        }
    },
    masterClosetDimmer: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.master_closet_dimmer);
        return {
            hall_dimmer: await task1
        }
    },
    laundryLeak: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.laundry_leak_sensor);
        return {
            laundryLeak: await task1
        }
    },
    georgeSwitch: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.george_switch);
        return {
            george_switch: await task1
        }
    },
    ryanPhone: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.ryans_phone);
        return {
            ryan_phone: await task1
        }
    },
    button: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.button);
        return {
            hall_dimmer: await task1
        }
    }
};
