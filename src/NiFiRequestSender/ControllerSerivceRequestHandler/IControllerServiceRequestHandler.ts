import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";

export interface IControllerServiceRequestHandler{
    getControllerService(id: string): Promise<ControllerServiceEntityType>;

    deleteControllerService(id: string, deleteOptions?: DeleteOptionsType): Promise<ControllerServiceEntityType>

    updateServiceControllerProperties(controllerServiceEntityType: ControllerServiceEntityType, componentId: string): Promise<ControllerServiceEntityType>

    changeControllerServiceState(state: string, id: string, version: number): Promise<ControllerServiceEntityType>
}
