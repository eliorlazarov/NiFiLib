import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {FunnelEntityType} from "../../NiFiObjects/Types/Funnel/FunnelEntityType";

export abstract class FunnelRequestHandler extends AbstractRequestHandler {
    public abstract async getFunnel(id: string): Promise<FunnelEntityType>

    public abstract async updateFunnel(id: string, funnel: FunnelEntityType): Promise<FunnelEntityType>

    public abstract async deleteFunnel(id: string, version: number): Promise<FunnelEntityType>


}

