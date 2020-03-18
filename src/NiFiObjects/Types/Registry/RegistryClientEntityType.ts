import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {RegistryType} from "./RegistryType";

export type RegistryClientEntityType = {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permission: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: RegistryType;
}