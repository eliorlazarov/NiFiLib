import {LabelRequestHandler} from "./LabelRequestHandler";
import {LabelEntityType} from "../../NiFiObjects/Types/Label/LabelEntityType";


export class DefaultLabelRequestHandler extends LabelRequestHandler {

    url = `/labels`;

    async deleteLabel(id: string, version: number): Promise<LabelEntityType> {
        return await this.Delete(this.url + `/${id}?version=${version}`) as LabelEntityType;
    }

    async getLabel(id: string): Promise<LabelEntityType> {
        return await this.Get(this.url + `/${id}`) as LabelEntityType
    }

    async updateLabel(id: string, label: LabelEntityType): Promise<LabelEntityType> {
        return await this.Put(this.url + `/${id}`, label) as LabelEntityType
    }


}