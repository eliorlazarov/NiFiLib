import {ProcessGroupType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {ProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupEntityType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {ProcessGroupEntity} from "../../NiFiObjects/ProcessGroup/ProcessGroupEntity";

export class ProcessGroupEntityBuilder implements ProcessGroupEntityType {

    bulletins: object[];
    component: ProcessGroupType;
    disconnectedNodeAcknowledged: boolean;
    id: string;
    permission: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;

    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setComponent(component: ProcessGroupType) {
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

    setPermission(permission: PermissionType) {
        this.permission = permission;
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
        return new ProcessGroupEntity(this);
    }


}