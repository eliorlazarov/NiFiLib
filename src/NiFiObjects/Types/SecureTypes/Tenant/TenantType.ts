import {PositionType} from "../../PositionType";

export type TenantType = {
    id: string;
    versionedComponentId: string;
    parentGroupId: string;
    position: PositionType;
    identity: string;
    configurable: boolean;

}