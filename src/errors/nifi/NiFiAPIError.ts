import {NiFiLibError} from "../NiFiLibError";
import {ErrorType} from "../ErrorTypes";

export class NiFiAPIError extends NiFiLibError {
    public constructor(errorMessage: string, details?: string, errorCode?: number, errorType?: ErrorType) {
        super(errorMessage, errorCode, 'NiFi');
    }
}
