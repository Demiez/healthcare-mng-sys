import {
  ValidationError,
  ValidationPipe,
  ValidationPipeOptions,
} from "@nestjs/common";
import { ErrorSubCodes, ForbiddenError } from "../errors";

export class DataValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    const valOptions = options || {};
    if (!valOptions.exceptionFactory) {
      valOptions.exceptionFactory = DataValidationPipe.defaultExceptionFactory;
    }
    if (valOptions.transform === undefined) {
      valOptions.transform = true;
    }
    super(valOptions);
  }

  static defaultExceptionFactory(errors: ValidationError[]) {
    if (errors && errors.length) {
      const result = errors
        .map((x) =>
          Object.keys(x.constraints).map((type) => {
            switch (type) {
              case "isDefined":
              case "isNotEmpty":
                return new ForbiddenError(
                  ErrorSubCodes.INVALID_INPUT_PARAMS_IS_REQUIRED,
                  [x.property, x.constraints[type]],
                );

              case "isString":
              case "maxLength":
                return new ForbiddenError(
                  ErrorSubCodes.INVALID_INPUT_PARAMS_IS_BAD_VALUE,
                  [x.property, x.constraints[type]],
                );

              default:
                return new ForbiddenError(type, [
                  x.property,
                  x.constraints[type],
                ]);
            }
          }),
        )
        .reduce((p, c) => [...p, ...c]);

      throw result;
    }
  }
}
