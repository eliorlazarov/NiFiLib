import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {FunnelType} from "./FunnelType";

export type FunnelEntityType = {
    revision: RevisionType;
    id: string
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    component: FunnelType;
}