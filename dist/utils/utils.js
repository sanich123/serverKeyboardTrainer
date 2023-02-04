"use strict";
exports.__esModule = true;
exports.notFound = void 0;
var const_1 = require("./const");
function notFound(res) {
    return res.status(400).json({ message: const_1.ERR_MSG });
}
exports.notFound = notFound;
