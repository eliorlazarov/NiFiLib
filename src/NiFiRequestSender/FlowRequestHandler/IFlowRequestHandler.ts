import {ClusterSummaryType} from "../../NiFiObjects/Types/ClusterSummaryType";
import {TemplateType} from "../../NiFiObjects/Types/TemplateType";
import {ProcessGroupFlowType} from "../../NiFiObjects/Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";

export interface IFlowRequestHandler {
    getRootPgId(): Promise<string>;

    getClusterSummary(): Promise<ClusterSummaryType>

    getProcessGroupControllerServices(processGroupId: string): Promise<ControllerServiceEntityType[]>

    changeProcessGroupState(state: string, processGroupId: string): Promise<object> //TODO- change this to a ScheduleComponentsEntity

    getTemplates(): Promise<TemplateType[]>

    getProcessGroupFlow(id: string): Promise<ProcessGroupFlowType>

    // public abstract getProcessGroupStatus(ProcessGroupId: string, recursive?: string): Promise<>

}