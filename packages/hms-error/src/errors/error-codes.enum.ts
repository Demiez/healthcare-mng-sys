import { BaseErrorCodes, BaseErrorSubCodes } from "./base-error-codes";

export class ErrorSubCodes extends BaseErrorSubCodes {
  // Used in order to when no one record was found to export
  public static get INVALID_INCLUDED_REPORT_RECORDS() {
    return "INVALID_INCLUDED_REPORT_RECORDS";
  }
  // Used in order to collision of file names
  public static get INVALID_REPORT_FILE_NAME() {
    return "INVALID_REPORT_FILE_NAME";
  }

  public static get INVALID_REPORT_STATUS() {
    return "INVALID_REPORT_STATUS";
  }

  public static get INCORRECT_ONBOARDING_STAGE() {
    return "INCORRECT_ONBOARDING_STAGE";
  }

  public static get INCORRECT_PROFESSIONAL_STATUS() {
    return "INCORRECT_PROFESSIONAL_STATUS";
  }

  // Used in order to fail Universal Drug Test invitation
  public static get INCORRECT_PROFESSIONAL_INVITATION_DATA() {
    return "INCORRECT_PROFESSIONAL_INVITATION_DATA";
  }

  // Used in order to fail Universal Drug Test redirection
  public static get INCORRECT_PROFESSIONAL_REDIRECTION_DATA() {
    return "INCORRECT_PROFESSIONAL_REDIRECTION_DATA";
  }

  public static get SPECIALTY_IS_PRIMARY() {
    return "SPECIALTY_IS_PRIMARY";
  }

  public static get INCORRECT_OPENING_START_DATE() {
    return "INCORRECT_OPENING_START_DATE";
  }

  public static get INVALID_INPUT_PARAMS_IS_REQUIRED() {
    return "INVALID_INPUT_PARAMS_IS_REQUIRED";
  }

  public static get INVALID_INPUT_PARAMS_IS_BAD_VALUE() {
    return "INVALID_INPUT_PARAMS_IS_BAD_VALUE";
  }

  public static get UNAUTHORIZED_PERMISSIONS_DENIED() {
    return "UNAUTHORIZED_PERMISSIONS_DENIED";
  }

  public static get INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE() {
    return "INVALID_INPUT_PARAMS_IS_DUPLICATE_VALUE";
  }
}
export class ErrorCodes extends BaseErrorCodes {
  public static get INTERNAL_SERVER_ERROR() {
    return "INTERNAL_SERVER_ERROR";
  }

  public static get INVALID_INPUT_PARAMS() {
    return "INVALID_INPUT_PARAMS";
  }

  public static get INVALID_AUTH_PARAMS_PASSWORD_INCORECT() {
    return "INVALID_AUTH_PARAMS_PASSWORD_INCORECT";
  }

  public static get UNAUTHORIZED() {
    return "UNAUTHORIZED";
  }

  public static get QUESTIONNARIE_NOT_FILLED() {
    return "QUESTIONNARIE_NOT_FILLED";
  }

  public static get RECORD_NOT_FOUND() {
    return "RECORD_NOT_FOUND";
  }

  public static get EMAIL_IS_NOT_VALID() {
    return "EMAIL_IS_NOT_VALID";
  }

  public static get INVALID_AUTH_PARAMS_LOGIN_NOT_FOUND() {
    return "INVALID_AUTH_PARAMS_LOGIN_NOT_FOUND";
  }

  public static get INVALID_AUTH_PARAMS_PASSWORD_INCORRECT() {
    return "INVALID_AUTH_PARAMS_PASSWORD_INCORRECT";
  }

  public static get AUTOLINK_IS_INVALID() {
    return "AUTOLINK_IS_INVALID";
  }

  public static get AUTOLINK_IS_ALREADY_REDEEMED() {
    return "AUTOLINK_IS_ALREADY_REDEEMED";
  }

  public static get AUTOLINK_IS_EXPIRED() {
    return "AUTOLINK_IS_EXPIRED";
  }

  public static get AUTH_FAILED_USER_IS_PENDING() {
    return "AUTH_FAILED_USER_IS_PENDING";
  }

  public static get AUTH_FAILED_USER_IS_TERMINATED() {
    return "AUTH_FAILED_USER_IS_TERMINATED";
  }

  public static get AUTH_FAILED_USER_IS_INACTIVE() {
    return "AUTH_FAILED_USER_IS_INACTIVE";
  }

  public static get REGISTRATION_EMAIL_IS_ALREADY_REGISTERED() {
    return "REGISTRATION_EMAIL_IS_ALREADY_REGISTERED";
  }

  public static get USER_EMAIL_HAS_BEEN_ALREADY_CONFIRMED() {
    return "USER_EMAIL_HAS_BEEN_ALREADY_CONFIRMED";
  }

  public static get BASIC_PROFILE_USER_NOT_FOUND() {
    return "BASIC_PROFILE_USER_NOT_FOUND";
  }

  public static get BASIC_PROFILE_EMAIL_HAS_ALREADY_CONFIRMED() {
    return "BASIC_PROFILE_EMAIL_HAS_ALREADY_CONFIRMED";
  }

  public static get SEND_CONFIRMATION_EMAIL_USER_INVALID_STATUS() {
    return "SEND_CONFIRMATION_EMAIL_USER_INVALID_STATUS";
  }

  public static get QUESTIONNAIRE_NOT_FILLED() {
    return "QUESTIONNAIRE_NOT_FILLED";
  }

  public static get REGISTRATION_FACILITY_NAME_ALREADY_REGISTERED() {
    return "REGISTRATION_FACILITY_NAME_ALREADY_REGISTERED";
  }

  public static get USER_HAS_NO_FACILITIES() {
    return "USER_HAS_NO_FACILITIES";
  }

  public static get FACILITY_ALREADY_ACTIVATED() {
    return "FACILITY_ALREADY_ACTIVATED";
  }

  public static get FACILITY_USER_DUPLICATE_EMAIL() {
    return "FACILITY_USER_DUPLICATE_EMAIL";
  }

  public static get FACILITY_UNABLE_TO_DELETE() {
    return "FACILITY_UNABLE_TO_DELETE";
  }

  public static get INCORRECT_ASSIGNMENT_STATUS() {
    return "INCORRECT_ASSIGNMENT_STATUS";
  }

  public static get ASSIGNMENTS_OVERLAPS_STATUS() {
    return "ASSIGNMENTS_OVERLAPS_STATUS";
  }

  public static get INCORRECT_OPENING_STATUS() {
    return "INCORRECT_OPENING_STATUS";
  }

  public static get REVIEW_DATE_NOT_PASSED() {
    return "REVIEW_DATE_NOT_PASSED";
  }

  public static get INCORRECT_ACCESS_ROLE() {
    return "INCORRECT_ACCESS_ROLE";
  }

  public static get SIGNATURE_IS_INVALID() {
    return "SIGNATURE_IS_INVALID";
  }

  public static get UNABLE_DELETE_PROFESSIONAL() {
    return "UNABLE_DELETE_PROFESSIONAL";
  }

  public static get UNABLE_DELETE_OPENING() {
    return "UNABLE_DELETE_OPENING";
  }

  public static get UNABLE_DELETE_SUPPLIER() {
    return "UNABLE_DELETE_SUPPLIER";
  }

  public static get UNABLE_DELETE_HEALTH_SYSTEM() {
    return "UNABLE_DELETE_HEALTH_SYSTEM";
  }

  public static get UNABLE_DELETE_FACILITY_SHIFT() {
    return "UNABLE_DELETE_FACILITY_SHIFT";
  }

  public static get CREATE_PROPHECY_CAREGIVER() {
    return "CREATE_PROPHECY_CAREGIVER";
  }

  public static get SEND_PROPHECY_ASSESSMENTS() {
    return "SEND_PROPHECY_ASSESSMENTS";
  }

  public static get INVALID_PROPHECY_ASSESSMENTS() {
    return "INVALID_PROPHECY_ASSESSMENTS";
  }

  public static get INVALID_PROFESSIONAL_MATCHING_STATUS() {
    return "INVALID_PROFESSIONAL_MATCHING_STATUS";
  }

  public static get DEPARTMENT_IS_ALREADY_IN_USE() {
    return "DEPARTMENT_IS_ALREADY_IN_USE";
  }

  public static get OPENING_IS_ALREADY_IN_USE() {
    return "OPENING_IS_ALREADY_IN_USE";
  }

  public static get FACILITY_ORIENTATION_IS_ALREADY_IN_USE() {
    return "FACILITY_ORIENTATION_IS_ALREADY_IN_USE";
  }

  public static get ASSIGNMENT_IS_EXIST() {
    return "ASSIGNMENT_IS_EXIST";
  }

  public static get FACILITY_USER_IS_USED() {
    return "FACILITY_USER_IS_USED";
  }

  public static get WEEKLY_OVERTIME() {
    return "WEEKLY_OVERTIME";
  }

  public static get SUPPLIER_USER_IS_USED() {
    return "SUPPLIER_USER_IS_USED";
  }

  public static get FLEX_POOL_IS_USED() {
    return "FLEX_POOL_IS_USED";
  }

  public static get ASSIGNMENT_TIMESHEET_IS_USED_IN_EXPORT_DOCUMENT() {
    return "ASSIGNMENT_TIMESHEET_IS_USED_IN_EXPORT_DOCUMENT";
  }

  public static get STATION_IS_USED() {
    return "STATION_IS_USED";
  }

  public static get OVERTIME_IS_POSSIBLE_FOR_AUTO_SELECT() {
    return "OVERTIME_IS_POSSIBLE_FOR_AUTO_SELECT";
  }

  public static get SHIFT_CANNOT_BE_REPOSTED() {
    return "SHIFT_CANNOT_BE_REPOSTED";
  }

  public static get SELECTED_SHIFT_OVERLAPS_AN_ASSIGNED_SHIFT() {
    return "SELECTED_SHIFT_OVERLAPS_AN_ASSIGNED_SHIFT";
  }

  public static get TIME_FORMAT_IS_OUT_OF_POSSIBLE_VALUES() {
    return "TIME_FORMAT_IS_OUT_OF_POSSIBLE_VALUES";
  }

  public static get ASSIGNMENT_UPDATE_IS_NOT_ALLOWED() {
    return "ASSIGNMENT_UPDATE_IS_NOT_ALLOWED";
  }

  public static get SHIFT_NO_LONGER_AVAILABLE() {
    return "SHIFT_NO_LONGER_AVAILABLE";
  }
}
