import {FunnelRequestHandler} from "./FunnelRequestHandler";
import {FunnelEntityType} from "../../NiFiObjects/Types/Funnel/FunnelEntityType";


export class DefaultFunnelRequestHandler extends FunnelRequestHandler {

    url = `/funnels`;

    async deleteFunnel(id: string, version: number): Promise<FunnelEntityType> {
        return await this.Delete(this.url + `/${id}?version=${version}`) as FunnelEntityType;
    }

    async getFunnel(id: string): Promise<FunnelEntityType> {
        return await this.Get(this.url + `/${id}`) as FunnelEntityType;
    }

    async updateFunnel(id: string, funnelEntity: FunnelEntityType): Promise<FunnelEntityType> {
        return await this.Put(this.url + `/${id}`, funnelEntity) as FunnelEntityType;
    }


}