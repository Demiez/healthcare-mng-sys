declare type exportDetailsType = Array<any> | any;
export declare enum ErrorResponseTypes {
    POSTBACK_UNIVERSAL_REQUEST = "POSTBACK_UNIVERSAL_REQUEST",
    BAD_REQUEST = "BAD_REQUEST",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    FORBIDDEN = "FORBIDDEN",
    UNAUTHORIZED = "UNAUTHORIZED",
    NOT_FOUND = "NOT_FOUND"
}
export declare class ErrorResponse extends Error {
    type: ErrorResponseTypes;
    errorCode: string;
    errorDetails: exportDetailsType;
    constructor(errorCode: string, errorDetails?: exportDetailsType);
}
export declare class ForbiddenError extends ErrorResponse {
    constructor(errorCode: string, errorDetails?: Array<any>);
}
export declare class UnauthorizedError extends ErrorResponse {
    constructor(errorCode: string, errorDetails?: Array<any>);
}
export declare class NotFoundError extends ErrorResponse {
    constructor(errorCode: string, errorDetails?: Array<any>);
}
export declare class InternalServerError extends ErrorResponse {
    constructor(errorCode: string, errorDetails?: Array<any>);
}
export declare class BadRequestError extends ErrorResponse {
    constructor(errorCode: string, errorDetails?: Array<any>);
}
export declare class PostbackUniversalError extends BadRequestError {
    model: any;
    constructor(model: any);
}
export {};
