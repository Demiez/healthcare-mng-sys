"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsDeniedModel = void 0;
const error_codes_enum_1 = require("../error-codes.enum");
class PermissionsDeniedModel {
    constructor() {
        this.errorCode = error_codes_enum_1.ErrorSubCodes.UNAUTHORIZED_PERMISSIONS_DENIED;
    }
}
exports.PermissionsDeniedModel = PermissionsDeniedModel;
//# sourceMappingURL=permissions-denied.model.js.map