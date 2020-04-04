import {FunnelEntityType} from "../../NiFiObjects/Types/Funnel/FunnelEntityType";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";

export interface IFunnelRequestHandler {
    getFunnel(id: string): Promise<FunnelEntityType>

    updateFunnel(id: string, funnel: FunnelEntityType): Promise<FunnelEntityType>

    deleteFunnel(id: string, deleteOptions?: DeleteOptionsType): Promise<FunnelEntityType>


}

