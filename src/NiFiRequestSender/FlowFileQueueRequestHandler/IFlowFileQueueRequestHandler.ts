export interface IFlowFileQueueRequestHandler {
    getFlowFileQueueDropStatus(id: string): Promise<object>

    getDropRequest(fatherId: string, dropId: string): Promise<object>

    emptyQueue(id: string): Promise<object>
}