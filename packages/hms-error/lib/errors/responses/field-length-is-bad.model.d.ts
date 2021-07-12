import { BaseFieldErrorModel } from "./base-field.model";
export declare class FieldLengthIsBadModel extends BaseFieldErrorModel {
    field: string;
    expectedLength: number;
    errorCode: string;
    constructor(field: string, expectedLength: number);
}
