import { BaseErrorSubCodes } from "../base-error-codes";
import { BaseFieldErrorModel } from "./base-field.model";

export class FieldIsBadModel extends BaseFieldErrorModel {
  public field: string;

  public errorCode: string =
    BaseErrorSubCodes.INVALID_INPUT_PARAMS_IS_BAD_VALUE;

  constructor(field: string) {
    super();
    this.field = field;
  }
}
