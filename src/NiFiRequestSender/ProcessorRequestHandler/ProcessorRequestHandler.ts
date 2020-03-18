import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {ProcessorEntityType} from "../../NiFiObjects/Types/Processor/ProcessorEntityType";

export abstract class ProcessorRequestHandler extends AbstractRequestHandler {
    public abstract async resetProcessorState(id: string): Promise<ProcessorEntityType>

    public abstract async getProcessor(id: string): Promise<ProcessorEntityType>

    public abstract async deleteProcessor(id: string, version: number): Promise<ProcessorEntityType>

    public abstract async updateProcessor(processorId: string, config: object): Promise<ProcessorEntityType>

    public abstract async updateProcessor(processorId: string, config: object, positioning: object): Promise<ProcessorEntityType>

    public abstract async updateProcessor(processorId: string, config: object, positioning: object, version: number): Promise<ProcessorEntityType>

    public abstract async updateProcessor(processorId: string, config: object, positioning?: object, version?: number): Promise<ProcessorEntityType>

    //TODO: check if change processor state can be implemented in update processor
    public abstract async changeProcessorState(state: string, processorId: string, version: number): Promise<ProcessorEntityType>


}