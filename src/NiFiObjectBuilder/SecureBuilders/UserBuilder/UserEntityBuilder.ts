import {PositionType} from "../../../NiFiObjects/Types/PositionType";
import {RevisionType} from "../../../NiFiObjects/Types/RevisionType";
import {PermissionType} from "../../../NiFiObjects/Types/PermissionType";
import {UserEntityType} from "../../../NiFiObjects/Types/SecureTypes/User/UserEntityType";
import {UserType} from "../../../NiFiObjects/Types/SecureTypes/User/UserType";
import {UserEntity} from "../../../NiFiObjects/SecureObjects/User/UserEntity";


export class UserEntityBuilder implements UserEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    disconnectedNodeAcknowledged: boolean;
    component: UserType;
    bulletins: object[];

    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

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

    setPermissions(permissions: PermissionType) {
        this.permissions = permissions;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this;
    }

    setComponent(component: UserType) {
        this.component = component;
        return this;
    }

    build() {
        return new UserEntity(this);
    }
}