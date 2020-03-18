import {AbstractRequestHandler} from "../AbstractRequestHandler";

export abstract class FlowFileQueueRequestHandler extends AbstractRequestHandler {
    public abstract async getFlowFileQueueDropStatus(id: string): Promise<object>

    public abstract async getDropRequest(fatherId: string, dropId: string): Promise<object>

    public abstract async emptyQueue(id: string): Promise<object>
}