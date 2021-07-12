import { ArgumentsHost, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { isArray } from "util";
import { ErrorResponseTypes } from "../errors";

export class NestErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let error = { ...exception };
    if (isArray(exception)) {
      [error] = exception;
    }
    if (!error.type) {
      statusCode = Object.values(HttpStatus).includes(error.status)
        ? error.status
        : HttpStatus.INTERNAL_SERVER_ERROR;
    }

    switch (error.type) {
      case ErrorResponseTypes.UNAUTHORIZED: {
        statusCode = HttpStatus.UNAUTHORIZED;
        break;
      }
      case ErrorResponseTypes.FORBIDDEN: {
        statusCode = HttpStatus.FORBIDDEN;
        break;
      }
      case ErrorResponseTypes.NOT_FOUND: {
        statusCode = HttpStatus.NOT_FOUND;
        break;
      }
      case ErrorResponseTypes.INTERNAL_SERVER_ERROR: {
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        break;
      }
      default:
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    response.status(statusCode).send(JSON.stringify(error));
  }
}
