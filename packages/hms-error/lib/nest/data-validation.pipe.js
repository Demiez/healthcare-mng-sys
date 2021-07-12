"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../errors");
class DataValidationPipe extends common_1.ValidationPipe {
    constructor(options) {
        const valOptions = options || {};
        if (!valOptions.exceptionFactory) {
            valOptions.exceptionFactory = DataValidationPipe.defaultExceptionFactory;
        }
        if (valOptions.transform === undefined) {
            valOptions.transform = true;
        }
        super(valOptions);
    }
    static defaultExceptionFactory(errors) {
        if (errors && errors.length) {
            const result = errors
                .map((x) => Object.keys(x.constraints).map((type) => {
                switch (type) {
                    case "isDefined":
                    case "isNotEmpty":
                        return new errors_1.ForbiddenError(errors_1.ErrorSubCodes.INVALID_INPUT_PARAMS_IS_REQUIRED, [x.property, x.constraints[type]]);
                    case "isString":
                    case "maxLength":
                        return new errors_1.ForbiddenError(errors_1.ErrorSubCodes.INVALID_INPUT_PARAMS_IS_BAD_VALUE, [x.property, x.constraints[type]]);
                    default:
                        return new errors_1.ForbiddenError(type, [
                            x.property,
                            x.constraints[type],
                        ]);
                }
            }))
                .reduce((p, c) => [...p, ...c]);
            throw result;
        }
    }
}
exports.DataValidationPipe = DataValidationPipe;
//# sourceMappingURL=data-validation.pipe.js.map