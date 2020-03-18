import {NiFiAPIError} from "./NiFiAPIError";
import {ErrorType} from "../ErrorTypes";


export class MaxRetriesReachedError extends NiFiAPIError {
    public constructor(errorMessage: string, details?: string) {
        super(errorMessage, details, 500, ErrorType.SYSTEM);
    }
}