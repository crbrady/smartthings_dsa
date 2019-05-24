module.exports = {
    kitchenLights: async function (ctx) {
        let devices = ctx.config.devices;

        const task1 = ctx.reqTools.GetDevice(ctx, devices.kitchenCan1);
        const task2 = ctx.reqTools.GetDevice(ctx, devices.kitchenCan2);
        const task3 = ctx.reqTools.GetDevice(ctx, devices.kitchenCan3);
        const task4 = ctx.reqTools.GetDevice(ctx, devices.kitchenCan4);

        return {
            kitchenCan1: await task1,
            kitchenCan2: await task2,
            kitchenCan3: await task3,
            kitchenCan4: await task4
        }
    },
    hallDimmer: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.hallDimmer);
        return {
            hallDimmer: await task1
        }
    },
    hallMotion: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.hallMotion);
        return {
            hallMotion: await task1
        }
    },
    hallThermostat: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.hallThermostat);
        return {
            hallThermostat: await task1
        }
    },
    officeTri: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.officeTriSensor);
        return {
            officeTri: await task1
        }
    },
    officeWallSwitch: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.officeWallSwitch);
        return {
            officeWallSwitch: await task1
        }
    },
    masterClosetDimmer: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.masterClosetDimmer);
        return {
            masterClosetDimmer: await task1
        }
    },
    laundryLeak: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.laundryLeakSensor);
        return {
            laundryLeak: await task1
        }
    },
    georgeSwitch: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.georgeSwitch);
        return {
            georgeSwitch: await task1
        }
    },
    ryanPhone: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.ryanPhone);
        return {
            ryanPhone: await task1
        }
    },
    button: async function (ctx) {
        const task1 = ctx.reqTools.GetDevice(ctx, ctx.config.devices.button);
        return {
            hallDimmer: await task1
        }
    }
};
