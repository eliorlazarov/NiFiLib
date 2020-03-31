import {ConnectionType} from "../../NiFiObjects/Types/Connection/ConnectionType";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";


export interface IConnectionRequestHandler {
    deleteConnection(id: string, DeleteOptions?: DeleteOptionsType): Promise<ConnectionType>;

    updateConnectionComponent(componentId: string, component: ConnectionType): Promise<ConnectionType>;

    getConnection(componentId: string): Promise<ConnectionType>;


}