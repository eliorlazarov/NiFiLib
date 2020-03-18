import {PositionType} from "../Types/PositionType";
import {LabelType} from "../Types/Label/LabelType";
import {LabelBuilder} from "../../NiFiObjectBuilder/LabelBuilder/LabelBuilder";


export class Label implements LabelType {
    position: PositionType;
    label: string;
    style: object;
    parentGroupId: string;
    versionedComponentId: string;

    constructor(labelBuilder: LabelBuilder) {
        this.position = labelBuilder.position;
        this.label = labelBuilder.label;
        this.style = labelBuilder.style;
        this.parentGroupId = labelBuilder.parentGroupId;
        this.versionedComponentId = labelBuilder.versionedComponentId
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getLabel(): string {
        return this.label;
    }

    public getStyle(): object {
        return this.style;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getVersionedComponentId(): string {
        return this.versionedComponentId;
    }


}