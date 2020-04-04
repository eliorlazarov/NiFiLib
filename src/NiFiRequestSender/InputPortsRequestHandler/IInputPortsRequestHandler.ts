import {PortEntityType} from "../../NiFiObjects/Types/Port/PortEntityType";

export interface IInputPortsRequestHandler {
    getInputPort(id: string): Promise<PortEntityType>
    
    changeInputPortState(id: string, state: string, version: number): Promise<PortEntityType>

}