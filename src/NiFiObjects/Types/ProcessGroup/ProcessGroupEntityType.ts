import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {ProcessGroupType} from "./ProcessGroupType";

export type ProcessGroupEntityType = {
    revision: RevisionType;
    id: string;
    uri: string
    position: PositionType;
    permission: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: ProcessGroupType;
}