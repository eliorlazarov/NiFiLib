import {ControllerServiceRequestHandler} from "./ControllerServiceRequestHandler";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";

export class DefaultControllerServiceRequestHandler extends ControllerServiceRequestHandler {

    url = '/controller-service';

    async deleteControllerService(id: string, version: number = 1): Promise<ControllerServiceEntityType> {
        //Todo: encodeUri
        return await this.Delete(this.url + `/${id}?version=${version}`) as ControllerServiceEntityType;
    }

    async getControllerService(id: string): Promise<ControllerServiceEntityType> {
        return await this.Get(this.url + `/${id}`) as ControllerServiceEntityType;
    }

    async updateServiceControllerProperties(properties: object, componentId: string, version: number): Promise<ControllerServiceEntityType> {
        let body = {
            "component": {
                "id": componentId,
                "properties": properties
            },
            "revision": {
                "version": version
            }
        };
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