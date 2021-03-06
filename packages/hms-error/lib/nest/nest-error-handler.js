"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const errors_1 = require("../errors");
/**
 * DEPRECATED use NestErrorFilter instead
 */
let AllExceptionsFilter = class AllExceptionsFilter extends core_1.BaseExceptionFilter {
    constructor(applicationRef) {
        super(applicationRef);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const errorMessage = `${exception.message}: ${exception.errorDetails}`;
        let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (!exception.type) {
            statusCode = Object.values(common_1.HttpStatus).includes(exception.status)
                ? exception.status
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        }
        switch (exception.type) {
            case errors_1.ErrorResponseTypes.UNAUTHORIZED: {
                statusCode = common_1.HttpStatus.UNAUTHORIZED;
                break;
            }
            case errors_1.ErrorResponseTypes.INTERNAL_SERVER_ERROR: {
                statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
                break;
            }
            default:
                statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        }
        response.status(statusCode).json({
            errorMessage,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch(),
    __param(0, common_1.Inject("HTTP_SERVER_REF")),
    __metadata("design:paramtypes", [Object])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=nest-error-handler.js.map