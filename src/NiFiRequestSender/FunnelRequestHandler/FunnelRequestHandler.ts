import {IFunnelRequestHandler} from "./IFunnelRequestHandler";
import {FunnelEntityType} from "../../NiFiObjects/Types/Funnel/FunnelEntityType";
import { AbstractRequestHandler } from "../AbstractRequestHandler";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";


export class FunnelRequestHandler extends AbstractRequestHandler implements IFunnelRequestHandler {

    url = `/funnels`;

    async deleteFunnel(id: string, deleteOptions?: DeleteOptionsType): Promise<FunnelEntityType> {
        let path = this.url + `/${id}`
        path = this.AddDeleteOptions(path, deleteOptions)

        return await this.Delete(path) as FunnelEntityType;
    }

    async getFunnel(id: string): Promise<FunnelEntityType> {
        return await this.Get(this.url + `/${id}`) as FunnelEntityType;
    }

    async updateFunnel(id: string, funnelEntity: FunnelEntityType): Promise<FunnelEntityType> {
        return await this.Put(this.url + `/${id}`, funnelEntity) as FunnelEntityType;
    }


}