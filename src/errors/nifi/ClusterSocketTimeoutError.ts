import {NiFiAPIError} from "./NiFiAPIError";
import {ErrorType} from "../ErrorTypes";


export class ClusterSocketTimeoutError extends NiFiAPIError {
    public constructor(errorMessage: string, details?: string) {
        super(errorMessage, details, 504, ErrorType.SYSTEM);
    }
}