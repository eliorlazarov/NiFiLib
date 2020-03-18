import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {ConnectionType} from "../../NiFiObjects/Types/Connection/ConnectionType";


export abstract class ConnectionRequestHandler extends AbstractRequestHandler {
    public abstract async deleteConnection(id: string, version: number): Promise<ConnectionType>;

    public abstract async updateConnectionComponent(properties: object, componentId: string, version: number): Promise<ConnectionType>;

    public abstract async getConnection(componentId: string): Promise<ConnectionType>;


}