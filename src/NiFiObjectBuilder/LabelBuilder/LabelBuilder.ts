import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {LabelType} from "../../NiFiObjects/Types/Label/LabelType";
import {Label} from "../../NiFiObjects/Label/Label";


export class LabelBuilder implements LabelType {
    position: PositionType;
    label: string;
    style: object;
    parentGroupId: string;
    versionedComponentId: string;

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setLabel(label: string) {
        this.label = label;
        return this;
    }

    setStyle(style: object) {
        this.style = style;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId = parentGroupId;
        return this;
    }

    setVersionedComponentId(versionedComponentId: string) {
        this.versionedComponentId = versionedComponentId;
        return this;
    }

    build() {
        return new Label(this);
    }


}