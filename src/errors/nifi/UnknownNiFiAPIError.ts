import {NiFiAPIError} from "./NiFiAPIError";

export class UnknownNiFiAPIError extends NiFiAPIError {
    public constructor(errorMessage: string, details?: string) {
        super(errorMessage, details);
    }
}