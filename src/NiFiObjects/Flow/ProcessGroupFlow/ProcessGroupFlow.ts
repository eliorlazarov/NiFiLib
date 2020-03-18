import {ProcessGroupFlowType} from "../../Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {FlowBreadcrumbEntityType} from "../../Types/Flow/FlowBreadcrumb/FlowBreadcrumbEntityType";
import {FlowType} from "../../Types/Flow/FlowType";
import {ProcessGroupFlowBuilder} from "../../../NiFiObjectBuilder/FlowBuilder/ProcessGroupFlowBuilder/ProcessGroupFlowBuilder";


export class ProcessGroupFlow implements ProcessGroupFlowType {

    breadcrumb: FlowBreadcrumbEntityType;
    flow: FlowType;
    id: string;
    lastRefreshed: string;
    parentGroupId: string;
    uri: string;

    constructor(processGroupFlowBuilder: ProcessGroupFlowBuilder) {
        this.breadcrumb = processGroupFlowBuilder.breadcrumb;
        this.flow = processGroupFlowBuilder.flow;
        this.id = processGroupFlowBuilder.id;
        this.lastRefreshed = processGroupFlowBuilder.lastRefreshed;
        this.parentGroupId = processGroupFlowBuilder.parentGroupId;
        this.uri = processGroupFlowBuilder.uri;
    }

    public getBreadcrumb(): FlowBreadcrumbEntityType {
        return this.breadcrumb;
    }

    public getFlow(): FlowType {
        return this.flow;
    }

    public getId(): string {
        return this.id;
    }

    public getLastRefreshed(): string {
        return this.lastRefreshed;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getUri(): string {
        return this.uri;
    }


}