import {NiFiAPIError} from "./NiFiAPIError";
import {ErrorType} from "../ErrorTypes";


export class AuthorizationError extends NiFiAPIError {
    public constructor(errorMessage: string, details?: string) {
        super(errorMessage, details, 401, ErrorType.USER);
    }
}