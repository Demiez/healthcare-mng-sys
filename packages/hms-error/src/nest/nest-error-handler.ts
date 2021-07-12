import {
  Catch,
  ArgumentsHost,
  HttpServer,
  Inject,
  HttpStatus,
} from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { ErrorResponseTypes } from "../errors";

/**
 * DEPRECATED use NestErrorFilter instead
 */
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(@Inject("HTTP_SERVER_REF") applicationRef: HttpServer) {
    super(applicationRef);
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const errorMessage = `${exception.message}: ${exception.errorDetails}`;
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

    if (!exception.type) {
      statusCode = Object.values(HttpStatus).includes(exception.status)
        ? exception.status
        : HttpStatus.INTERNAL_SERVER_ERROR;
    }

    switch (exception.type) {
      case ErrorResponseTypes.UNAUTHORIZED: {
        statusCode = HttpStatus.UNAUTHORIZED;
        break;
      }
      case ErrorResponseTypes.INTERNAL_SERVER_ERROR: {
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        break;
      }
      default:
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    response.status(statusCode).json({
      errorMessage,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
