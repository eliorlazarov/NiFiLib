import {IFlowFileQueueRequestHandler} from "./IFlowFileQueueRequestHandler";
import { AbstractRequestHandler } from "../AbstractRequestHandler";

export class FlowFileQueueRequestHandler extends AbstractRequestHandler implements IFlowFileQueueRequestHandler {

    url = `/flowfile-queues`;

    //Todo: encodeUri
    async emptyQueue(id: string): Promise<object> {
        let result = await this.Post(this.url + `/${id}/drop-requests`);
        return result['DropRequest'] as object;
    }

    //Todo: encodeUri
    async getDropRequest(fatherId: string, dropId: string): Promise<object> {
        let result = await this.Get(this.url + `/${fatherId}/drop-requests/${dropId}`);
        return result['DropRequest'] as object;
    }

    async getFlowFileQueueDropStatus(id: string): Promise<object> {
        return await this.Get(this.url + `/${id}`) as object;
    }

}