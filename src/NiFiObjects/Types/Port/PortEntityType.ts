import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {PortType} from "./PortType";

export type PortEntityType = {
    revision: RevisionType;
    id: string
    uri: string
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: PortType;
    portType: string;
    operatePermissions: PermissionType;
}