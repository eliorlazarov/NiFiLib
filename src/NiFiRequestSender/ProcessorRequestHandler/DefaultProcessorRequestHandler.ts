import {ProcessorRequestHandler} from "./ProcessorRequestHandler";
import {ProcessorEntityType} from "../../NiFiObjects/Types/Processor/ProcessorEntityType";

export class DefaultProcessorRequestHandler extends ProcessorRequestHandler {
    url = `/processors`;

    //Todo: encodeURI  is relevant
    async changeProcessorState(state: string, processorId: string, version: number): Promise<ProcessorEntityType> {
        let body = {
            "component": {
                "id": processorId,
                "state": state
            },
            "revision": {
                "version": version
            }
        };
        return await this.Put(this.url + `/${processorId}`, body) as ProcessorEntityType;
    }

    async deleteProcessor(id: string, version: number): Promise<ProcessorEntityType> {
        return await this.Delete(this.url +`/${id}?version=${version}`) as ProcessorEntityType;
    }

    async getProcessor(id: string): Promise<ProcessorEntityType> {
        return await this.Get(this.url + `/${id}`) as ProcessorEntityType;
    }

    async resetProcessorState(id: string): Promise<ProcessorEntityType> {
        return await this.Post(this.url + `/${id}/state/clear-requests`) as ProcessorEntityType;
    }

    async updateProcessor(processorId: string, config: object): Promise<ProcessorEntityType>;
    async updateProcessor(processorId: string, config: object, positioning: object): Promise<ProcessorEntityType>;
    async updateProcessor(processorId: string, config: object, positioning: object, version: number): Promise<ProcessorEntityType>;
    async updateProcessor(processorId: string, config: object, positioning?: object, version?: number): Promise<ProcessorEntityType>;
    async updateProcessor(processorId: string, config: object, positioning?: object, version?: number): Promise<ProcessorEntityType> {
        let body = {
            "component": {
                "id": processorId,
                "config": config,
                "position": positioning
            },
            "revision": {
                "version": version
            }
        };
        return await this.Put(this.url + `/${processorId}`, body) as ProcessorEntityType;
    }


}