"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldIsDuplicateValueModel = void 0;
const base_error_codes_1 = require("../base-error-codes");
const base_field_model_1 = require("./base-field.model");
class FieldIsDuplicateValueModel extends base_field_model_1.BaseFieldErrorModel {
    constructor(field) {
        super();
        this.errorCode = base_error_codes_1.BaseErrorSubCodes.INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE;
        this.field = field;
    }
}
exports.FieldIsDuplicateValueModel = FieldIsDuplicateValueModel;
//# sourceMappingURL=field-is-duplicate-value.model.js.map