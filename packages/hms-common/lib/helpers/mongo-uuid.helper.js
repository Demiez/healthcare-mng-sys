"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBinaryToString = exports.convertStringToBinary = void 0;
const UUID = require("mongo-uuid");
const mongoose = require("mongoose");
const convertStringToBinary = (uuidString) => {
    return UUID(mongoose.Types.Buffer.Binary, uuidString);
};
exports.convertStringToBinary = convertStringToBinary;
const convertBinaryToString = (uuidBinary) => {
    if (typeof uuidBinary === "string") {
        return uuidBinary;
    }
    else {
        return UUID.stringify(uuidBinary);
    }
};
exports.convertBinaryToString = convertBinaryToString;
//# sourceMappingURL=mongo-uuid.helper.js.map