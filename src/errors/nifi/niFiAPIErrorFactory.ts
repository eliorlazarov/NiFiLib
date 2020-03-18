import {NiFiAPIError} from "./NiFiAPIError";
import {ProcessGroupDoesNotExistError} from "./ProcessGroupDoesNotExistError";
import {ConnectionDoesNotExistError} from "./ConnectionDoesNotExistError";
import {ClusterNodeIsDisconnectedFromClusterError} from "./ClusterNodeIsDisconnectedFromClusterError";
import {ClusterSocketTimeoutError} from "./ClusterSocketTimeoutError";
import {ClusterUnknownHostError} from "./ClusterUnknownHostError";
import {UnknownNiFiAPIError} from "./UnknownNiFiAPIError";
import {ControllerServiceIsNotDisabledError} from "./ControllerServiceIsNotDisabledError";
import {ClusterStillVotingFlowError} from "./ClusterStillVotingFlowError";
import {AuthorizationError} from "./AuthorizationError";
import {FlowIsRunningError} from "./FlowIsRunningError";
import {ControllerServiceDoesNotExistsError} from "./ControllerServiceDoesNotExistsError";
import {ProcessorDoesNotExistError} from "./ProcessorDoesNotExistError";

export class NiFiAPIErrorFactory {

    public getNiFiAPIError(message: string, details?: string): NiFiAPIError {
        if (message.includes("Unable to locate group with id")) {
            return new ProcessGroupDoesNotExistError(details || message, message);
        } else if (message.includes("Unable to find connection with id")) {
            return new ConnectionDoesNotExistError(details || message, message);
        } else if (message.includes("is currently disconnected") || message.endsWith("because the node is not connected")
            || message.endsWith("Nodes are currently disconnected")) {
            return new ClusterNodeIsDisconnectedFromClusterError(details || message, message);
        } else if (message.includes("due to java.net.SocketTimeoutException: Read timed out")) {
            return new ClusterSocketTimeoutError(details || message, message);
        } else if (message.includes("java.net.UnknownHostException:")
            || message.startsWith("javax.ws.rs.ProcessingException: java.net.UnknownHostException:")) {
            return new ClusterUnknownHostError(details || message, message);
        } else if (message.includes("because it is not disabled")) {
            return new ControllerServiceIsNotDisabledError(details || message, message);
        } else if (message === "Cluster is still in the process of voting on the appropriate Data FlowSnippet.") {
            return new ClusterStillVotingFlowError(details || message, message);
        } else if (message.includes('Unable to validate the access token.')) {
            return new AuthorizationError(details || message, message);
        } else if (message.includes("is running") || message.endsWith("is not stopped")) {
            return new FlowIsRunningError(details || message, message);
        }
        else if (message.includes("Unable to locate controller service with id")) {
            return new ControllerServiceDoesNotExistsError(details || message, message)
        }
        else if (message.includes("Unable to find processor with id")) {
            return new ProcessorDoesNotExistError(details || message, message)
        }

        return new UnknownNiFiAPIError(details || message, message);
    }
}