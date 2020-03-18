import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {ProcessorType} from "./ProcessorType";

export type ProcessorEntityType = {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: ProcessorType;
    inputRequirements: string;
    status?: object;
    operatePermissions: PermissionType;
}