import {RevisionType} from "../RevisionType";
import {ControllerServiceType} from "./ControllerServiceType";
import {PositionType} from "../PositionType";
import {PermissionType} from "../PermissionType";
import {ControllerServiceStatusType} from "./ControllerServiceStatusType";

export type ControllerServiceEntityType = {
    revision: RevisionType;
    id:string;
    uri:string;
    position:PositionType;
    permission:PermissionType;
    bulletins:object[];
    disconnectedNodeAcknowledged:boolean;
    parentGroupId:string;
    component: ControllerServiceType;
    operatePermissions:PermissionType;
    status:ControllerServiceStatusType;
}