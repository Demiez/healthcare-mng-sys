"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberStringFromPhoneString = void 0;
const getNumberStringFromPhoneString = (stringNumber) => stringNumber.replace("(", "").replace(")", "").replace("+", "").replace("-", "").split(" ").join("");
exports.getNumberStringFromPhoneString = getNumberStringFromPhoneString;
//# sourceMappingURL=convert-string.helper.js.map