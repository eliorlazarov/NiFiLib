import {IControllerServiceRequestHandler} from "./IControllerServiceRequestHandler";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";
import { AbstractRequestHandler } from "../../NiFiRequestSender/AbstractRequestHandler";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";

export class ControllerServiceRequestHandler extends AbstractRequestHandler implements IControllerServiceRequestHandler {

    url = '/controller-service';

    async deleteControllerService(id: string, deleteOptions: DeleteOptionsType): Promise<ControllerServiceEntityType> {
        //Todo: encodeUri
        let path = this.AddDeleteOptions(`${this.url}/${id}`, deleteOptions)
        return await this.Delete(path) as ControllerServiceEntityType;
    }

    async getControllerService(id: string): Promise<ControllerServiceEntityType> {
        return await this.Get(this.url + `/${id}`) as ControllerServiceEntityType;
    }

    async updateServiceControllerProperties(controllerServiceEntityType: ControllerServiceEntityType, componentId: string): Promise<ControllerServiceEntityType> {
        let body = controllerServiceEntityType;
        return await this.Put(this.url + `/${componentId}`, body) as ControllerServiceEntityType;
    }

    async changeControllerServiceState(state: string, id: string, version: number): Promise<ControllerServiceEntityType> {
        let body = {
            "component": {
                "id": id,
                "state": state
            },
            "revision": {
                "version": version
            }
        };

        return await this.Put(this.url + `/${id}`, body) as ControllerServiceEntityType;
    }


}