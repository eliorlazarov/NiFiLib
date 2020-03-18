import {PositionType} from "../PositionType";

export type FunnelType = {
    id: string,
    position: PositionType,
    versionedComponentId: string;
    parentGroupId: string;
}