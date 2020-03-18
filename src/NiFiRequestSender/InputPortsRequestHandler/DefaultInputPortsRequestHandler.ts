import {InputPortsRequestHandler} from "./InputPortsRequestHandler";
import {PortEntityType} from "../../NiFiObjects/Types/Port/PortEntityType";

export class DefaultInputPortsRequestHandler extends InputPortsRequestHandler {
    url = `/input-ports`;

    async changeInputPortState(id: string, state: string, version: number): Promise<PortEntityType> {
        let body = {
            "component": {
                "id": id,
                "state": state
            },
            "revision": {
                "version": version
            }
        };
        return await this.Put(this.url + `/${id}`, body) as PortEntityType;
    }

    async getInputPort(id: string): Promise<PortEntityType> {
        return await this.Get(this.url + `/${id}`) as PortEntityType;
    }

}