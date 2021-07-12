import { ValidationError, ValidationPipe, ValidationPipeOptions } from "@nestjs/common";
export declare class DataValidationPipe extends ValidationPipe {
    constructor(options?: ValidationPipeOptions);
    static defaultExceptionFactory(errors: ValidationError[]): void;
}
