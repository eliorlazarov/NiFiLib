import {RevisionType} from "../../RevisionType";
import {PositionType} from "../../PositionType";
import {PermissionType} from "../../PermissionType";
import {AccessPolicyType} from "./AccessPolicyType";

export type AccessPolicyEntityType = {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    generated: string;
    component: AccessPolicyType;
}
