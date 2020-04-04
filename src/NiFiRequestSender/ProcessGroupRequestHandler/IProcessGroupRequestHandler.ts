import {FlowType} from "../../NiFiObjects/Types/Flow/FlowType";
import {VariableRegistryEntityType} from "../../NiFiObjects/Types/VariableRegistry/VariableRegistryEntityType";
import {ProcessorEntityType} from "../../NiFiObjects/Types/Processor/ProcessorEntityType";
import {ProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupEntityType";
import {ConnectionEntityType} from "../../NiFiObjects/Types/Connection/ConnectionEntityType";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";

export interface IProcessGroupRequestHandler {
    getProcessGroups(fatherId: string): Promise<ProcessGroupEntityType[]>

    getProcessGroup(id: string): Promise<ProcessGroupEntityType>

    getProcessors(fatherId: string): Promise<ProcessorEntityType[]>

    getProcessGroupConnections(id: string): Promise<ConnectionEntityType[]>

    postProcessGroup(fatherId: string, processGroup: ProcessGroupEntityType): Promise<ProcessGroupEntityType>

    createTemplateInstance(fatherId: string, templateId: string, x: number, y: number): Promise<FlowType>

    deleteProcessGroup(groupId: string, deleteOptions: DeleteOptionsType): Promise<ProcessGroupEntityType>

    getVariableRegistry(fatherId: string): Promise<VariableRegistryEntityType>

    postVariableRegistry(fatherId: string, variables: any[], version: number): Promise<object>

    updateProcessGroup(pgId: string, ProcessGroup: ProcessGroupEntityType): Promise<ProcessGroupEntityType>

}