"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseErrorSubCodes = exports.BaseErrorCodes = void 0;
class BaseErrorCodes {
    static get INTERNAL_SERVER_ERROR() {
        return "INTERNAL_SERVER_ERROR";
    }
    static get INVALID_INPUT_PARAMS() {
        return "INVALID_INPUT_PARAMS";
    }
    static get UNAUTHORIZED() {
        return "UNAUTHORIZED";
    }
    static get RECORD_NOT_FOUND() {
        return "RECORD_NOT_FOUND";
    }
    static get USER_NOT_FOUND() {
        return "USER_NOT_FOUND";
    }
}
exports.BaseErrorCodes = BaseErrorCodes;
class BaseErrorSubCodes {
    static get INVALID_INPUT_PARAMS_IS_REQUIRED() {
        return "INVALID_INPUT_PARAMS_IS_REQUIRED";
    }
    static get INVALID_INPUT_PARAMS_IS_PRIMARY() {
        return "INVALID_INPUT_PARAMS_IS_PRIMARY";
    }
    static get INVALID_INPUT_PARAMS_IS_BAD_VALUE() {
        return "INVALID_INPUT_PARAMS_IS_BAD_VALUE";
    }
    static get UNAUTHORIZED_PERMISSIONS_DENIED() {
        return "UNAUTHORIZED_PERMISSIONS_DENIED";
    }
    static get INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE() {
        return "INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE";
    }
    static get INVALID_INPUT_PARAMS_IS_DUPLICATE_RECORD() {
        return "INVALID_INPUT_PARAMS_IS_DUPLICATE_RECORD";
    }
}
exports.BaseErrorSubCodes = BaseErrorSubCodes;
//# sourceMappingURL=base-error-codes.js.map