import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {ConnectionType} from "./ConnectionType";

export type ConnectionEntityType = {
    revision: RevisionType;
    id: string
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    component: ConnectionType;

}