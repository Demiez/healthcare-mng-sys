"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostbackUniversalError = exports.BadRequestError = exports.InternalServerError = exports.NotFoundError = exports.UnauthorizedError = exports.ForbiddenError = exports.ErrorResponse = exports.ErrorResponseTypes = void 0;
var ErrorResponseTypes;
(function (ErrorResponseTypes) {
    ErrorResponseTypes["POSTBACK_UNIVERSAL_REQUEST"] = "POSTBACK_UNIVERSAL_REQUEST";
    ErrorResponseTypes["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorResponseTypes["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    ErrorResponseTypes["FORBIDDEN"] = "FORBIDDEN";
    ErrorResponseTypes["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorResponseTypes["NOT_FOUND"] = "NOT_FOUND";
})(ErrorResponseTypes = exports.ErrorResponseTypes || (exports.ErrorResponseTypes = {}));
class ErrorResponse extends Error {
    constructor(errorCode, errorDetails = []) {
        super(errorCode);
        this.errorCode = errorCode;
        this.errorDetails = errorDetails;
        this.type = ErrorResponseTypes.INTERNAL_SERVER_ERROR;
    }
}
exports.ErrorResponse = ErrorResponse;
class ForbiddenError extends ErrorResponse {
    constructor(errorCode, errorDetails = []) {
        super(errorCode, errorDetails);
        this.type = ErrorResponseTypes.FORBIDDEN;
    }
}
exports.ForbiddenError = ForbiddenError;
class UnauthorizedError extends ErrorResponse {
    constructor(errorCode, errorDetails = []) {
        super(errorCode, errorDetails);
        this.type = ErrorResponseTypes.UNAUTHORIZED;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class NotFoundError extends ErrorResponse {
    constructor(errorCode, errorDetails = []) {
        super(errorCode, errorDetails);
        this.type = ErrorResponseTypes.NOT_FOUND;
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends ErrorResponse {
    constructor(errorCode, errorDetails = []) {
        super(errorCode, errorDetails);
        this.type = ErrorResponseTypes.INTERNAL_SERVER_ERROR;
    }
}
exports.InternalServerError = InternalServerError;
class BadRequestError extends ErrorResponse {
    constructor(errorCode, errorDetails = []) {
        super(errorCode, errorDetails);
        this.type = ErrorResponseTypes.BAD_REQUEST;
    }
}
exports.BadRequestError = BadRequestError;
class PostbackUniversalError extends BadRequestError {
    constructor(model) {
        super("", []);
        this.type = ErrorResponseTypes.POSTBACK_UNIVERSAL_REQUEST;
        this.model = model;
    }
}
exports.PostbackUniversalError = PostbackUniversalError;
//# sourceMappingURL=error-response.js.map