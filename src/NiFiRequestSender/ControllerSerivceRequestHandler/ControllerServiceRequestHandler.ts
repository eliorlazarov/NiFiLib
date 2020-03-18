import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";

export abstract class ControllerServiceRequestHandler extends AbstractRequestHandler {
    public abstract async getControllerService(id: string): Promise<ControllerServiceEntityType>;

    public abstract async deleteControllerService(id: string, version?: number): Promise<ControllerServiceEntityType>

    public abstract async updateServiceControllerProperties(properties: object, componentId: string, version: number): Promise<ControllerServiceEntityType>

    public abstract async changeControllerServiceState(state: string, id: string, version: number): Promise<ControllerServiceEntityType>
}
