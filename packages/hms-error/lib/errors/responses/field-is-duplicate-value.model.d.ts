import { BaseFieldErrorModel } from "./base-field.model";
export declare class FieldIsDuplicateValueModel extends BaseFieldErrorModel {
    field: string;
    errorCode: string;
    constructor(field: string);
}
