import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {PortEntityType} from "../../NiFiObjects/Types/Port/PortEntityType";

export abstract class InputPortsRequestHandler extends AbstractRequestHandler {
    public abstract async getInputPort(id: string): Promise<PortEntityType>

    public abstract async changeInputPortState(id: string, state: string, version: number): Promise<PortEntityType>

}