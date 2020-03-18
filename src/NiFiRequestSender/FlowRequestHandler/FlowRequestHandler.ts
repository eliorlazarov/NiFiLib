import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {ClusterSummaryType} from "../../NiFiObjects/Types/ClusterSummaryType";
import {TemplateType} from "../../NiFiObjects/Types/TemplateType";
import {ProcessGroupFlowType} from "../../NiFiObjects/Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";

export abstract class FlowRequestHandler extends AbstractRequestHandler {
    public abstract async getRootPgId(): Promise<string>;

    public abstract async getClusterSummary(): Promise<ClusterSummaryType>

    public abstract async getProcessGroupControllerServices(processGroupId: string): Promise<ControllerServiceEntityType[]>

    public abstract async changeProcessGroupState(state: string, processGroupId: string): Promise<object>

    public abstract async getTemplates(): Promise<TemplateType[]>

    public abstract async getProcessGroupFlow(id: string): Promise<ProcessGroupFlowType>

    // public abstract getProcessGroupStatus(ProcessGroupId: string, recursive?: string): Promise<>

}