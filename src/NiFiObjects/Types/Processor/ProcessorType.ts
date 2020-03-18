import {RevisionType} from "../RevisionType";
import {PositionType} from "../PositionType";
import {RelationShipType} from "../RelationShipType";
import {PermissionType} from "../PermissionType";
import {ProcessorConfigType} from "./ProcessorConfigType";

export type ProcessorType = {
    revision: RevisionType,
    id: string,
    url: string,
    position: PositionType,
    relationships: RelationShipType[],
    permissions: PermissionType,
    config: ProcessorConfigType
}