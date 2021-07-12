"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodes = exports.ErrorSubCodes = void 0;
const base_error_codes_1 = require("./base-error-codes");
class ErrorSubCodes extends base_error_codes_1.BaseErrorSubCodes {
    // Used in order to when no one record was found to export
    static get INVALID_INCLUDED_REPORT_RECORDS() {
        return "INVALID_INCLUDED_REPORT_RECORDS";
    }
    // Used in order to collision of file names
    static get INVALID_REPORT_FILE_NAME() {
        return "INVALID_REPORT_FILE_NAME";
    }
    static get INVALID_REPORT_STATUS() {
        return "INVALID_REPORT_STATUS";
    }
    static get INCORRECT_ONBOARDING_STAGE() {
        return "INCORRECT_ONBOARDING_STAGE";
    }
    static get INCORRECT_PROFESSIONAL_STATUS() {
        return "INCORRECT_PROFESSIONAL_STATUS";
    }
    // Used in order to fail Universal Drug Test invitation
    static get INCORRECT_PROFESSIONAL_INVITATION_DATA() {
        return "INCORRECT_PROFESSIONAL_INVITATION_DATA";
    }
    // Used in order to fail Universal Drug Test redirection
    static get INCORRECT_PROFESSIONAL_REDIRECTION_DATA() {
        return "INCORRECT_PROFESSIONAL_REDIRECTION_DATA";
    }
    static get SPECIALTY_IS_PRIMARY() {
        return "SPECIALTY_IS_PRIMARY";
    }
    static get INCORRECT_OPENING_START_DATE() {
        return "INCORRECT_OPENING_START_DATE";
    }
    static get INVALID_INPUT_PARAMS_IS_REQUIRED() {
        return "INVALID_INPUT_PARAMS_IS_REQUIRED";
    }
    static get INVALID_INPUT_PARAMS_IS_BAD_VALUE() {
        return "INVALID_INPUT_PARAMS_IS_BAD_VALUE";
    }
    static get UNAUTHORIZED_PERMISSIONS_DENIED() {
        return "UNAUTHORIZED_PERMISSIONS_DENIED";
    }
    static get INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE() {
        return "INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE";
    }
}
exports.ErrorSubCodes = ErrorSubCodes;
class ErrorCodes extends base_error_codes_1.BaseErrorCodes {
    static get INTERNAL_SERVER_ERROR() {
        return "INTERNAL_SERVER_ERROR";
    }
    static get INVALID_INPUT_PARAMS() {
        return "INVALID_INPUT_PARAMS";
    }
    static get INVALID_AUTH_PARAMS_PASSWORD_INCORECT() {
        return "INVALID_AUTH_PARAMS_PASSWORD_INCORECT";
    }
    static get UNAUTHORIZED() {
        return "UNAUTHORIZED";
    }
    static get QUESTIONNARIE_NOT_FILLED() {
        return "QUESTIONNARIE_NOT_FILLED";
    }
    static get RECORD_NOT_FOUND() {
        return "RECORD_NOT_FOUND";
    }
    static get EMAIL_IS_NOT_VALID() {
        return "EMAIL_IS_NOT_VALID";
    }
    static get INVALID_AUTH_PARAMS_LOGIN_NOT_FOUND() {
        return "INVALID_AUTH_PARAMS_LOGIN_NOT_FOUND";
    }
    static get INVALID_AUTH_PARAMS_PASSWORD_INCORRECT() {
        return "INVALID_AUTH_PARAMS_PASSWORD_INCORRECT";
    }
    static get AUTOLINK_IS_INVALID() {
        return "AUTOLINK_IS_INVALID";
    }
    static get AUTOLINK_IS_ALREADY_REDEEMED() {
        return "AUTOLINK_IS_ALREADY_REDEEMED";
    }
    static get AUTOLINK_IS_EXPIRED() {
        return "AUTOLINK_IS_EXPIRED";
    }
    static get AUTH_FAILED_USER_IS_PENDING() {
        return "AUTH_FAILED_USER_IS_PENDING";
    }
    static get AUTH_FAILED_USER_IS_TERMINATED() {
        return "AUTH_FAILED_USER_IS_TERMINATED";
    }
    static get AUTH_FAILED_USER_IS_INACTIVE() {
        return "AUTH_FAILED_USER_IS_INACTIVE";
    }
    static get REGISTRATION_EMAIL_IS_ALREADY_REGISTERED() {
        return "REGISTRATION_EMAIL_IS_ALREADY_REGISTERED";
    }
    static get USER_EMAIL_HAS_BEEN_ALREADY_CONFIRMED() {
        return "USER_EMAIL_HAS_BEEN_ALREADY_CONFIRMED";
    }
    static get BASIC_PROFILE_USER_NOT_FOUND() {
        return "BASIC_PROFILE_USER_NOT_FOUND";
    }
    static get BASIC_PROFILE_EMAIL_HAS_ALREADY_CONFIRMED() {
        return "BASIC_PROFILE_EMAIL_HAS_ALREADY_CONFIRMED";
    }
    static get SEND_CONFIRMATION_EMAIL_USER_INVALID_STATUS() {
        return "SEND_CONFIRMATION_EMAIL_USER_INVALID_STATUS";
    }
    static get QUESTIONNAIRE_NOT_FILLED() {
        return "QUESTIONNAIRE_NOT_FILLED";
    }
    static get REGISTRATION_FACILITY_NAME_ALREADY_REGISTERED() {
        return "REGISTRATION_FACILITY_NAME_ALREADY_REGISTERED";
    }
    static get USER_HAS_NO_FACILITIES() {
        return "USER_HAS_NO_FACILITIES";
    }
    static get FACILITY_ALREADY_ACTIVATED() {
        return "FACILITY_ALREADY_ACTIVATED";
    }
    static get FACILITY_USER_DUPLICATE_EMAIL() {
        return "FACILITY_USER_DUPLICATE_EMAIL";
    }
    static get FACILITY_UNABLE_TO_DELETE() {
        return "FACILITY_UNABLE_TO_DELETE";
    }
    static get INCORRECT_ASSIGNMENT_STATUS() {
        return "INCORRECT_ASSIGNMENT_STATUS";
    }
    static get ASSIGNMENTS_OVERLAPS_STATUS() {
        return "ASSIGNMENTS_OVERLAPS_STATUS";
    }
    static get INCORRECT_OPENING_STATUS() {
        return "INCORRECT_OPENING_STATUS";
    }
    static get REVIEW_DATE_NOT_PASSED() {
        return "REVIEW_DATE_NOT_PASSED";
    }
    static get INCORRECT_ACCESS_ROLE() {
        return "INCORRECT_ACCESS_ROLE";
    }
    static get SIGNATURE_IS_INVALID() {
        return "SIGNATURE_IS_INVALID";
    }
    static get UNABLE_DELETE_PROFESSIONAL() {
        return "UNABLE_DELETE_PROFESSIONAL";
    }
    static get UNABLE_DELETE_OPENING() {
        return "UNABLE_DELETE_OPENING";
    }
    static get UNABLE_DELETE_SUPPLIER() {
        return "UNABLE_DELETE_SUPPLIER";
    }
    static get UNABLE_DELETE_HEALTH_SYSTEM() {
        return "UNABLE_DELETE_HEALTH_SYSTEM";
    }
    static get UNABLE_DELETE_FACILITY_SHIFT() {
        return "UNABLE_DELETE_FACILITY_SHIFT";
    }
    static get CREATE_PROPHECY_CAREGIVER() {
        return "CREATE_PROPHECY_CAREGIVER";
    }
    static get SEND_PROPHECY_ASSESSMENTS() {
        return "SEND_PROPHECY_ASSESSMENTS";
    }
    static get INVALID_PROPHECY_ASSESSMENTS() {
        return "INVALID_PROPHECY_ASSESSMENTS";
    }
    static get INVALID_PROFESSIONAL_MATCHING_STATUS() {
        return "INVALID_PROFESSIONAL_MATCHING_STATUS";
    }
    static get DEPARTMENT_IS_ALREADY_IN_USE() {
        return "DEPARTMENT_IS_ALREADY_IN_USE";
    }
    static get OPENING_IS_ALREADY_IN_USE() {
        return "OPENING_IS_ALREADY_IN_USE";
    }
    static get FACILITY_ORIENTATION_IS_ALREADY_IN_USE() {
        return "FACILITY_ORIENTATION_IS_ALREADY_IN_USE";
    }
    static get ASSIGNMENT_IS_EXIST() {
        return "ASSIGNMENT_IS_EXIST";
    }
    static get FACILITY_USER_IS_USED() {
        return "FACILITY_USER_IS_USED";
    }
    static get WEEKLY_OVERTIME() {
        return "WEEKLY_OVERTIME";
    }
    static get SUPPLIER_USER_IS_USED() {
        return "SUPPLIER_USER_IS_USED";
    }
    static get FLEX_POOL_IS_USED() {
        return "FLEX_POOL_IS_USED";
    }
    static get ASSIGNMENT_TIMESHEET_IS_USED_IN_EXPORT_DOCUMENT() {
        return "ASSIGNMENT_TIMESHEET_IS_USED_IN_EXPORT_DOCUMENT";
    }
    static get STATION_IS_USED() {
        return "STATION_IS_USED";
    }
    static get OVERTIME_IS_POSSIBLE_FOR_AUTO_SELECT() {
        return "OVERTIME_IS_POSSIBLE_FOR_AUTO_SELECT";
    }
    static get SHIFT_CANNOT_BE_REPOSTED() {
        return "SHIFT_CANNOT_BE_REPOSTED";
    }
    static get SELECTED_SHIFT_OVERLAPS_AN_ASSIGNED_SHIFT() {
        return "SELECTED_SHIFT_OVERLAPS_AN_ASSIGNED_SHIFT";
    }
    static get TIME_FORMAT_IS_OUT_OF_POSSIBLE_VALUES() {
        return "TIME_FORMAT_IS_OUT_OF_POSSIBLE_VALUES";
    }
    static get ASSIGNMENT_UPDATE_IS_NOT_ALLOWED() {
        return "ASSIGNMENT_UPDATE_IS_NOT_ALLOWED";
    }
    static get SHIFT_NO_LONGER_AVAILABLE() {
        return "SHIFT_NO_LONGER_AVAILABLE";
    }
}
exports.ErrorCodes = ErrorCodes;
//# sourceMappingURL=error-codes.enum.js.map