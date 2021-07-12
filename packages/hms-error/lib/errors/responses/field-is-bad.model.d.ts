import { BaseFieldErrorModel } from "./base-field.model";
export declare class FieldIsBadModel extends BaseFieldErrorModel {
    field: string;
    errorCode: string;
    constructor(field: string);
}
