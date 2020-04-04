import {LabelEntityType} from "../../NiFiObjects/Types/Label/LabelEntityType";
import { DeleteOptionsType } from "../../NiFiObjects/Types/DeleteOptionsType";

export interface ILabelRequestHandler  {
    getLabel(id: string): Promise<LabelEntityType>

    updateLabel(id: string, label: LabelEntityType): Promise<LabelEntityType>

    deleteLabel(id: string, deleteOptions: DeleteOptionsType): Promise<LabelEntityType>


}