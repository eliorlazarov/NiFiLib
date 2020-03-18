import {ConnectionRequestHandler} from "./ConnectionRequestHandler";
import {ConnectionType} from "../../NiFiObjects/Types/Connection/ConnectionType";

export class DefaultConnectionRequestHandler extends ConnectionRequestHandler {

    url = `/connections`;

    public async deleteConnection(id: string, version: number = 1): Promise<ConnectionType> {
        let result = await this.Delete(this.url + `/${id}?version=${version}`);
        return result["component"] as ConnectionType;
    }

    public async getConnection(connectionId: string): Promise<ConnectionType> {
        let result = await this.Get(this.url + `/${connectionId}`);
        return result["component"] as ConnectionType;
    }

    public async updateConnectionComponent(properties: object, connectionId: string, version: number = 1): Promise<ConnectionType> {
        properties['id'] = connectionId;
        let body = {
            component: properties,
            revision: {
                version: 0
            }
        };
        let result = await this.Put(this.url + `/${connectionId}`, body);
        return result["component"] as ConnectionType;
    }

}