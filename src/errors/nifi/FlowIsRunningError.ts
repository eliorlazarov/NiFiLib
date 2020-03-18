import {NiFiAPIError} from "./NiFiAPIError";
import {ErrorType} from "../ErrorTypes";


export class FlowIsRunningError extends NiFiAPIError {
    public constructor(errorMessage: string, details?: string) {
        super(errorMessage, details, 409, ErrorType.USER);
    }
}