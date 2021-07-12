import { BaseErrorSubCodes } from "../base-error-codes";
import { BaseFieldErrorModel } from "./base-field.model";

export class FieldLengthIsBadModel extends BaseFieldErrorModel {
  public field: string;
  public expectedLength: number;

  public errorCode: string =
    BaseErrorSubCodes.INVALID_INPUT_PARAMS_IS_BAD_VALUE;

  constructor(field: string, expectedLength: number) {
    super();
    this.field = field;
    this.expectedLength = expectedLength;
  }
}
