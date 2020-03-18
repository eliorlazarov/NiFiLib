import {NiFiAPIError} from "./NiFiAPIError";
import {ErrorType} from "../ErrorTypes";


export class ClusterNodeIsDisconnectedFromClusterError extends NiFiAPIError {
    public constructor(errorMessage: string, details?: string) {
        super(errorMessage, details, 503, ErrorType.SYSTEM);
    }
}