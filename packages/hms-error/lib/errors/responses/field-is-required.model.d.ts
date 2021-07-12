import { BaseFieldErrorModel } from "./base-field.model";
export declare class FieldIsRequiredModel extends BaseFieldErrorModel {
    field: string;
    errorCode: string;
    constructor(field: string);
}
