import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {AffectedComponentType} from "./AffectedComponentType";

export type AffectedComponentEntityType = {
    revision: RevisionType
    id: string
    uri: string
    position: PositionType
    permissions: PermissionType
    //Todo: bulletin type
    // bulletins:
    disconnectedNodeAcknowledged: boolean
    component: AffectedComponentType
}