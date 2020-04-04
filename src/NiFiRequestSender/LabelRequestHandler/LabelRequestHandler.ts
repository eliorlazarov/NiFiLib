import {ILabelRequestHandler} from "./ILabelRequestHandler";
import {LabelEntityType} from "../../NiFiObjects/Types/Label/LabelEntityType";
import { AbstractRequestHandler } from "../AbstractRequestHandler";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";


export class LabelRequestHandler extends AbstractRequestHandler implements ILabelRequestHandler {

    url = `/labels`;

    async deleteLabel(id: string, deleteOptions: DeleteOptionsType): Promise<LabelEntityType> {
        let path = this.url + `/${id}`
        path = this.AddDeleteOptions(path, deleteOptions)

        return await this.Delete(path) as LabelEntityType;
    }

    async getLabel(id: string): Promise<LabelEntityType> {
        return await this.Get(this.url + `/${id}`) as LabelEntityType
    }

    async updateLabel(id: string, label: LabelEntityType): Promise<LabelEntityType> {
        return await this.Put(this.url + `/${id}`, label) as LabelEntityType
    }


}