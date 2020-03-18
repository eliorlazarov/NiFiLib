import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {LabelEntityType} from "../../NiFiObjects/Types/Label/LabelEntityType";

export abstract class LabelRequestHandler extends AbstractRequestHandler {
    public abstract async getLabel(id: string): Promise<LabelEntityType>

    public abstract async updateLabel(id: string, label: LabelEntityType): Promise<LabelEntityType>

    public abstract async deleteLabel(id: string, version: number): Promise<LabelEntityType>


}