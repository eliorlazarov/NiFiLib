import {RevisionType} from "../../RevisionType";
import {PositionType} from "../../PositionType";
import {PermissionType} from "../../PermissionType";
import {UserGroupType} from "./UserGroupType";

export type UserGroupEntityType = {
    revision: RevisionType,
    id: string,
    uri: string,
    position: PositionType,
    permissions: PermissionType,
    disconnectedNodeAcknowledged: boolean,
    component: UserGroupType
}