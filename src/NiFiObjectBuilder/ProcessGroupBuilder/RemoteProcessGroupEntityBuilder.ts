import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {RemoteProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/RemoteProcessGroupEntityType";
import {RemoteProcessGroupType} from "../../NiFiObjects/Types/ProcessGroup/RemoteProcessGroupType";
import {RemoteProcessGroupEntity} from "../../NiFiObjects/ProcessGroup/RemoteProcessGroupEntity";

export class RemoteProcessGroupEntityBuilder implements RemoteProcessGroupEntityType {

    bulletins: object[];
    component: RemoteProcessGroupType;
    disconnectedNodeAcknowledged: boolean;
    id: string;
    permissions: PermissionType;
    operatePermissions:PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;

    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setComponent(component: RemoteProcessGroupType) {
        this.component = component;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    setPermissions(permissions: PermissionType) {
        this.permissions = permissions;
        return this;
    }
    setOperatePermissions(operatePermissions:PermissionType){
        this.operatePermissions = operatePermissions;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setRevision(revision: RevisionType) {
        this.revision = revision;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }


    build() {
        return new RemoteProcessGroupEntity(this);
    }


}