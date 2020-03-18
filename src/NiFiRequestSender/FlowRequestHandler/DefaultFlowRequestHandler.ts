import {FlowRequestHandler} from "./FlowRequestHandler";
import {ClusterSummaryType} from "../../NiFiObjects/Types/ClusterSummaryType";
import {TemplateType} from "../../NiFiObjects/Types/TemplateType";
import {ProcessGroupFlowType} from "../../NiFiObjects/Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";

export class DefaultFlowRequestHandler extends FlowRequestHandler {
    url = `/flow`;

    async changeProcessGroupState(state: string, processGroupId: string): Promise<object> {
        let body = {
            "id": processGroupId,
            "state": state
        };
        return await this.Put(this.url + `/process-groups/${processGroupId}`, body) as object;
    }

    async getClusterSummary(): Promise<ClusterSummaryType> {
        let result = await this.Get(this.url + `/cluster/summary`);
        return result['clusterSummary'] as ClusterSummaryType

    }

    async getProcessGroupControllerServices(processGroupId: string): Promise<ControllerServiceEntityType[]> {
        let result = await this.Get(this.url + `/process-groups/${processGroupId}/controller-services`);
        return result['controllerServices'] as ControllerServiceEntityType[];
    }

    async getProcessGroupFlow(id: string): Promise<ProcessGroupFlowType> {
        let result = await this.Get(this.url + `/process-groups/${id}`);
        return result['processGroupFlow'] as ProcessGroupFlowType;
    }

    async getRootPgId(): Promise<string> {
        let result = await this.Get(this.url + `/process-groups/root`);
        return result['body']['processGroupFlow']['id'] as string;
    }

    async getTemplates(): Promise<TemplateType[]> {
        let result = await this.Get(this.url + `/templates`);
        return result['templates'] as TemplateType[];
    }

}