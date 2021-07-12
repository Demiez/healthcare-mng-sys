type exportDetailsType = Array<any> | any;

export enum ErrorResponseTypes {
  POSTBACK_UNIVERSAL_REQUEST = "POSTBACK_UNIVERSAL_REQUEST",
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  FORBIDDEN = "FORBIDDEN",
  UNAUTHORIZED = "UNAUTHORIZED",
  NOT_FOUND = "NOT_FOUND",
}

export class ErrorResponse extends Error {
  public type: ErrorResponseTypes;

  public errorCode: string;

  public errorDetails: exportDetailsType;

  constructor(errorCode: string, errorDetails: exportDetailsType = []) {
    super(errorCode);
    this.errorCode = errorCode;
    this.errorDetails = errorDetails;
    this.type = ErrorResponseTypes.INTERNAL_SERVER_ERROR;
  }
}

export class ForbiddenError extends ErrorResponse {
  constructor(errorCode: string, errorDetails: Array<any> = []) {
    super(errorCode, errorDetails);
    this.type = ErrorResponseTypes.FORBIDDEN;
  }
}
export class UnauthorizedError extends ErrorResponse {
  constructor(errorCode: string, errorDetails: Array<any> = []) {
    super(errorCode, errorDetails);
    this.type = ErrorResponseTypes.UNAUTHORIZED;
  }
}
export class NotFoundError extends ErrorResponse {
  constructor(errorCode: string, errorDetails: Array<any> = []) {
    super(errorCode, errorDetails);
    this.type = ErrorResponseTypes.NOT_FOUND;
  }
}
export class InternalServerError extends ErrorResponse {
  constructor(errorCode: string, errorDetails: Array<any> = []) {
    super(errorCode, errorDetails);
    this.type = ErrorResponseTypes.INTERNAL_SERVER_ERROR;
  }
}

export class BadRequestError extends ErrorResponse {
  constructor(errorCode: string, errorDetails: Array<any> = []) {
    super(errorCode, errorDetails);
    this.type = ErrorResponseTypes.BAD_REQUEST;
  }
}

export class PostbackUniversalError extends BadRequestError {
  public model: any; // Universal Postback model.

  constructor(model: any) {
    super("", []);
    this.type = ErrorResponseTypes.POSTBACK_UNIVERSAL_REQUEST;
    this.model = model;
  }
}
