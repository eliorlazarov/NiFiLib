import {ControllerServiceType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceType";
import {ControllerServiceEntityType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceEntityType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {ControllerServiceEntity} from "../../NiFiObjects/ControllerService/ControllerServiceEntity";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {ControllerServiceStatusType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceStatusType";

export class ControllerServiceEntityBuilder implements ControllerServiceEntityType {
    revision: RevisionType;
    component: ControllerServiceType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    id: string;
    uri: string;
    operatePermissions: PermissionType;
    parentGroupId: string;
    permission: PermissionType;
    position: PositionType;
    status: ControllerServiceStatusType;

    setRevision(revision: RevisionType) {
        this.revision = revision;
        return this;
    }

    setComponent(component: ControllerServiceType) {
        this.component = component;
        return this;
    }

    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this.disconnectedNodeAcknowledged;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }
    setUri(uri:string) {
        this.uri = uri;
        return this;
    }
    setOperatePermissions(operatePermissions:PermissionType){
        this.operatePermissions = operatePermissions;
        return this;
    }
    setParentGroupId(parentGroupId:string){
        this.parentGroupId = parentGroupId;
        return this;
    }
    setPermission(permission:PermissionType){
        this.permission = permission;
        return this;
    }
    setPosition(position:PositionType){
        this.position = position;
        return this;
    }
    setStatus(status:ControllerServiceStatusType){
        this.status = status;
        return this;
    }

    build() {
        return new ControllerServiceEntity(this);
    }


}