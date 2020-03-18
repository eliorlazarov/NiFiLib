import {RevisionType} from "../../RevisionType";
import {PositionType} from "../../PositionType";
import {PermissionType} from "../../PermissionType";
import {TenantType} from "./TenantType";

export type TenantEntityType = {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: TenantType;
}