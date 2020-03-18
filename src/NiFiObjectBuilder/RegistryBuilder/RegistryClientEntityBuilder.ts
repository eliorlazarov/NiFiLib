import {RegistryClientEntityType} from "../../NiFiObjects/Types/Registry/RegistryClientEntityType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {RegistryType} from "../../NiFiObjects/Types/Registry/RegistryType";
import {RegistryClientEntity} from "../../NiFiObjects/Registry/RegistryClientEntity";

export class RegistryClientEntityBuilder implements RegistryClientEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permission: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: RegistryType;

    setRevision(revision: RevisionType) {
        this.revision = revision;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setPermission(permission: PermissionType) {
        this.permission = permission;
        return this;
    }

    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this;
    }

    setComponent(component: RegistryType) {
        this.component = component;
        return this;
    }

    build() {
        return new RegistryClientEntity(this);
    }
}