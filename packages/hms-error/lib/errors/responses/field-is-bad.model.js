"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldIsBadModel = void 0;
const base_error_codes_1 = require("../base-error-codes");
const base_field_model_1 = require("./base-field.model");
class FieldIsBadModel extends base_field_model_1.BaseFieldErrorModel {
    constructor(field) {
        super();
        this.errorCode = base_error_codes_1.BaseErrorSubCodes.INVALID_INPUT_PARAMS_IS_BAD_VALUE;
        this.field = field;
    }
}
exports.FieldIsBadModel = FieldIsBadModel;
//# sourceMappingURL=field-is-bad.model.js.map