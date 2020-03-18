import {RevisionType} from "../../RevisionType";
import {PermissionType} from "../../PermissionType";
import {UserType} from "./UserType";
import {PositionType} from "../../PositionType";

export type UserEntityType = {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: UserType;
}