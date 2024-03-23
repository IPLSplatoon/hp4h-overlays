"use strict";
const RadiaTiltifyConnector_1 = require("./RadiaTiltifyConnector");
module.exports = (nodecg) => {
    try {
        new RadiaTiltifyConnector_1.RadiaTiltifyConnector(nodecg);
    }
    catch (e) {
        nodecg.log.warn(e.message);
    }
};
