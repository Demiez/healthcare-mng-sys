import { ErrorSubCodes } from "../error-codes.enum";

export class PermissionsDeniedModel {
  public errorCode: string = ErrorSubCodes.UNAUTHORIZED_PERMISSIONS_DENIED;
}
