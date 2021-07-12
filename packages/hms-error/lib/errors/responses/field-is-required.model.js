"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldIsRequiredModel = void 0;
const base_error_codes_1 = require("../base-error-codes");
const base_field_model_1 = require("./base-field.model");
class FieldIsRequiredModel extends base_field_model_1.BaseFieldErrorModel {
    constructor(field) {
        super();
        this.errorCode = base_error_codes_1.BaseErrorSubCodes.INVALID_INPUT_PARAMS_IS_REQUIRED;
        this.field = field;
    }
}
exports.FieldIsRequiredModel = FieldIsRequiredModel;
//# sourceMappingURL=field-is-required.model.js.map