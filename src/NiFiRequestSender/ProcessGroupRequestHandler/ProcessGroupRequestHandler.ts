import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {FlowType} from "../../NiFiObjects/Types/Flow/FlowType";
import {VariableRegistryEntityType} from "../../NiFiObjects/Types/VariableRegistry/VariableRegistryEntityType";
import {ProcessorEntityType} from "../../NiFiObjects/Types/Processor/ProcessorEntityType";
import {ProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupEntityType";
import {ConnectionEntityType} from "../../NiFiObjects/Types/Connection/ConnectionEntityType";

export abstract class ProcessGroupRequestHandler extends AbstractRequestHandler {
    public abstract async getProcessGroups(fatherId: string): Promise<ProcessGroupEntityType[]>

    public abstract async getProcessGroup(id: string): Promise<ProcessGroupEntityType>

    public abstract async getProcessors(fatherId: string): Promise<ProcessorEntityType[]>

    public abstract async getProcessGroupConnections(id: string): Promise<ConnectionEntityType[]>

    public abstract async postProcessGroup(fatherId: string, name: string, x: number, y: number): Promise<ProcessGroupEntityType>

    public abstract async templateInstance(fatherId: string, templateId: string, x: number, y: number): Promise<FlowType>

    public abstract async deleteProcessGroup(groupId: string, version: number): Promise<ProcessGroupEntityType>

    public abstract async getVariableRegistry(fatherId: string): Promise<VariableRegistryEntityType>

    public abstract async postVariableRegistry(fatherId: string, variables: any[], version: number): Promise<object>

    public abstract async postProcessGroupFromRegistry(fatherId: string, x: number, y: number, registryId: string, bucketId: string,
                                                 flowId: string, version: number): Promise<ProcessGroupEntityType>

    public abstract async renameProcessGroup(name: string, pgId: string, version: number): Promise<ProcessGroupEntityType>


}