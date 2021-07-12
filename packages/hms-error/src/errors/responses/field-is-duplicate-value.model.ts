import { BaseErrorSubCodes } from "../base-error-codes";
import { BaseFieldErrorModel } from "./base-field.model";

export class FieldIsDuplicateValueModel extends BaseFieldErrorModel {
  public field: string;

  public errorCode: string =
    BaseErrorSubCodes.INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE;

  constructor(field: string) {
    super();
    this.field = field;
  }
}
