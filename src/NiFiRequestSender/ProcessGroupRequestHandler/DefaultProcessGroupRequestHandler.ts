import {ProcessGroupRequestHandler} from "./ProcessGroupRequestHandler";
import {VariableRegistryEntityType} from "../../NiFiObjects/Types/VariableRegistry/VariableRegistryEntityType";
import {FlowType} from "../../NiFiObjects/Types/Flow/FlowType";
import {ProcessorEntityType} from "../../NiFiObjects/Types/Processor/ProcessorEntityType";
import {ProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupEntityType";
import {ConnectionEntityType} from "../../NiFiObjects/Types/Connection/ConnectionEntityType";

export class DefaultProcessGroupRequestHandler extends ProcessGroupRequestHandler {
    url = `/process-groups`;

    async deleteProcessGroup(groupId: string, version: number): Promise<ProcessGroupEntityType> {
        return await this.Delete(this.url + `/${groupId}?version=${version}`) as ProcessGroupEntityType;
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

    async postProcessGroup(fatherId: string, name: string, x: number, y: number): Promise<ProcessGroupEntityType> {
        let body = {
            "revision": {
                "version": 0
            },
            "component": {
                "name": name,
                "position": {
                    "x": x,
                    "y": y
                }
            }
        };
        return await this.Post(this.url + `/${fatherId}/process-groups`, body) as ProcessGroupEntityType;
    }

    async postProcessGroupFromRegistry(fatherId: string, x: number, y: number, registryId: string, bucketId: string, flowId: string, version: number): Promise<ProcessGroupEntityType> {
        let body = {
            "revision": {
                "version": 0
            },
            "component": {
                "position": {
                    "x": x,
                    "y": y
                },
                "versionControlInformation": {
                    "registryId": registryId,
                    "bucketId": bucketId,
                    "flowId": flowId,
                    "version": version
                }
            }
        };
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

    async renameProcessGroup(name: string, pgId: string, version: number): Promise<ProcessGroupEntityType> {
        let body = {
            "revision": {
                "version": version
            },
            "component": {
                "id": pgId,
                "name": name
            }
        };
        return await this.Put(this.url + `/${pgId}`, body) as ProcessGroupEntityType
    }

    async templateInstance(fatherId: string, templateId: string, x: number, y: number): Promise<FlowType> {
        let body = {
            "originX": x,
            "originY": y,
            "templateId": templateId
        };
        return await this.Post(this.url + `/${fatherId}/template-instance`, body) as FlowType;
    }

}