import {ProcessGroupFlowType} from "../../../NiFiObjects/Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {FlowBreadcrumbEntityType} from "../../../NiFiObjects/Types/Flow/FlowBreadcrumb/FlowBreadcrumbEntityType";
import {ProcessGroupFlow} from "../../../NiFiObjects/Flow/ProcessGroupFlow/ProcessGroupFlow";
import {FlowType} from "../../../NiFiObjects/Types/Flow/FlowType";


export class ProcessGroupFlowBuilder implements ProcessGroupFlowType {
    breadcrumb: FlowBreadcrumbEntityType;
    flow: FlowType;
    id: string;
    lastRefreshed: string;
    parentGroupId: string;
    uri: string;


    setBreadcrumb(breadcrumb: FlowBreadcrumbEntityType) {
        this.breadcrumb = breadcrumb;
        return this;
    }

    setFlow(flow: FlowType) {
        this.flow = flow;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    setLastRefreshed(lastRefreshed: string) {
        this.lastRefreshed = lastRefreshed;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId = parentGroupId;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }


    build() {
        return new ProcessGroupFlow(this);
    }


}