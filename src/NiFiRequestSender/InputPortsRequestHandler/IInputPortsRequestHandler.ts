import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {PortEntityType} from "../../NiFiObjects/Types/Port/PortEntityType";

export interface IInputPortsRequestHandler extends AbstractRequestHandler {
    getInputPort(id: string): Promise<PortEntityType>
    
    changeInputPortState(id: string, state: string, version: number): Promise<PortEntityType>

}