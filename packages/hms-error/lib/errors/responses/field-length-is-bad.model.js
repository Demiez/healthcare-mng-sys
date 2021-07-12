"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldLengthIsBadModel = void 0;
const base_error_codes_1 = require("../base-error-codes");
const base_field_model_1 = require("./base-field.model");
class FieldLengthIsBadModel extends base_field_model_1.BaseFieldErrorModel {
    constructor(field, expectedLength) {
        super();
        this.errorCode = base_error_codes_1.BaseErrorSubCodes.INVALID_INPUT_PARAMS_IS_BAD_VALUE;
        this.field = field;
        this.expectedLength = expectedLength;
    }
}
exports.FieldLengthIsBadModel = FieldLengthIsBadModel;
//# sourceMappingURL=field-length-is-bad.model.js.map