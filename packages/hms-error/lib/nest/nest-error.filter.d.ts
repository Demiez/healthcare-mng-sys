import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class NestErrorFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
