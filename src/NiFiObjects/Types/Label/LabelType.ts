import {PositionType} from "../PositionType";

export type LabelType = {
    position: PositionType,
    label: string,
    style: object,
    versionedComponentId: string;
    parentGroupId: string;
}