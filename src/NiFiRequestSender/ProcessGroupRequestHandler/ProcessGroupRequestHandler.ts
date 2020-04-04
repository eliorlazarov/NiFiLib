import {IProcessGroupRequestHandler} from "./IProcessGroupRequestHandler";
import {VariableRegistryEntityType} from "../../NiFiObjects/Types/VariableRegistry/VariableRegistryEntityType";
import {FlowType} from "../../NiFiObjects/Types/Flow/FlowType";
import {ProcessorEntityType} from "../../NiFiObjects/Types/Processor/ProcessorEntityType";
import {ProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupEntityType";
import {ConnectionEntityType} from "../../NiFiObjects/Types/Connection/ConnectionEntityType";
import { AbstractRequestHandler } from "../AbstractRequestHandler";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";

export class ProcessGroupRequestHandler extends AbstractRequestHandler implements IProcessGroupRequestHandler {
    url = `/process-groups`;

    async deleteProcessGroup(groupId: string, deleteOptions: DeleteOptionsType): Promise<ProcessGroupEntityType> {
        let path = this.url + `/${groupId}`;
        path = this.AddDeleteOptions(path, deleteOptions);

        return await this.Delete(path) as ProcessGroupEntityType;
    }

    async getProcessGroup(id: string): Promise<ProcessGroupEntityType> {
        return await this.Get(this.url + `/${id}`) as ProcessGroupEntityType;
    }

    async getProcessGroupConnections(id: string): Promise<ConnectionEntityType[]> {
        return await this.Get(this.url + `/${id}/connections`) as ConnectionEntityType[];
    }

    async getProcessGroups(fatherId: string): Promise<ProcessGroupEntityType[]> {
        return await this.Get(this.url + `/${fatherId}/process-groups`) as ProcessGroupEntityType[];
    }

    async getProcessors(fatherId: string): Promise<ProcessorEntityType[]> {
        return await this.Get(this.url + `/${fatherId}/processors`) as ProcessorEntityType[];
    }

    async getVariableRegistry(fatherId: string): Promise<VariableRegistryEntityType> {
        //Todo: encodeURI relevant
        return await this.Get(this.url + `/${fatherId}/variable-registry`) as VariableRegistryEntityType;
    }

    async postProcessGroup(fatherId: string, processGroup: ProcessGroupEntityType): Promise<ProcessGroupEntityType> {
        let body = processGroup;
        return await this.Post(this.url + `/${fatherId}/process-groups`, body) as ProcessGroupEntityType;
    }


    async postVariableRegistry(fatherId: string, variables: any[], version: number): Promise<object> {
        let body = {
            "processGroupRevision": {
                "version": version
            },
            "variableRegistry": {
                "processGroupId": fatherId,
                "variables": variables
            }
        };
        return await this.Post(this.url + `/${fatherId}/variable-registry/update-requests`, body) as Object;
    }

    async updateProcessGroup(pgId: string, ProcessGroup: ProcessGroupEntityType): Promise<ProcessGroupEntityType> {
        let body = ProcessGroup;
        return await this.Put(this.url + `/${pgId}`, body) as ProcessGroupEntityType
    }

    async createTemplateInstance(fatherId: string, templateId: string, x: number, y: number): Promise<FlowType> {
        let body = {
            "originX": x,
            "originY": y,
            "templateId": templateId
        };
        return await this.Post(this.url + `/${fatherId}/template-instance`, body) as FlowType;
    }

}