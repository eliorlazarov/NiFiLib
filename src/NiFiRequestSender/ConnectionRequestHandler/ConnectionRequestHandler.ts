import {ConnectionType} from "../../NiFiObjects/Types/Connection/ConnectionType";
import { AbstractRequestHandler } from "../AbstractRequestHandler";
import { IConnectionRequestHandler } from "./IConnectionRequestHandler";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";

export class ConnectionRequestHandler extends AbstractRequestHandler implements IConnectionRequestHandler{

    url = `/connections`;

    public async deleteConnection(id: string, deleteOptions: DeleteOptionsType): Promise<ConnectionType> {
        let path = `${this.url}/${id}`
        path = this.AddDeleteOptions(path, deleteOptions);
        let result = await this.Delete(path);
        return result["component"] as ConnectionType;
    }

    public async getConnection(connectionId: string): Promise<ConnectionType> {
        let result = await this.Get(this.url + `/${connectionId}`);
        return result["component"] as ConnectionType;
    }

    public async updateConnectionComponent(connectionId: string, component: ConnectionType): Promise<ConnectionType> {
        component['id'] = connectionId;
        let body = {
            component: component,
            revision: {
                version: 0
            }
        };
        let result = await this.Put(this.url + `/${connectionId}`, body);
        return result["component"] as ConnectionType;
    }

}