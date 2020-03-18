import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {RemoteProcessGroupType} from "./RemoteProcessGroupType";

export type RemoteProcessGroupEntityType = {
    revision: RevisionType;
    id: string
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: RemoteProcessGroupType;
    operatePermissions: PermissionType;
}