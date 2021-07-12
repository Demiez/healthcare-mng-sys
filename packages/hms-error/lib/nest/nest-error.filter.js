"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("util");
const errors_1 = require("../errors");
class NestErrorFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let error = Object.assign({}, exception);
        if (util_1.isArray(exception)) {
            [error] = exception;
        }
        if (!error.type) {
            statusCode = Object.values(common_1.HttpStatus).includes(error.status)
                ? error.status
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        }
        switch (error.type) {
            case errors_1.ErrorResponseTypes.UNAUTHORIZED: {
                statusCode = common_1.HttpStatus.UNAUTHORIZED;
                break;
            }
            case errors_1.ErrorResponseTypes.FORBIDDEN: {
                statusCode = common_1.HttpStatus.FORBIDDEN;
                break;
            }
            case errors_1.ErrorResponseTypes.NOT_FOUND: {
                statusCode = common_1.HttpStatus.NOT_FOUND;
                break;
            }
            case errors_1.ErrorResponseTypes.INTERNAL_SERVER_ERROR: {
                statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                break;
            }
            default:
                statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        }
        response.status(statusCode).send(JSON.stringify(error));
    }
}
exports.NestErrorFilter = NestErrorFilter;
//# sourceMappingURL=nest-error.filter.js.map