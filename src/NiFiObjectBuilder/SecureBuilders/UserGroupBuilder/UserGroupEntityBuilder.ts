import {PositionType} from "../../../NiFiObjects/Types/PositionType";
import {UserGroupEntityType} from "../../../NiFiObjects/Types/SecureTypes/UserGroup/UserGroupEntityType";
import {RevisionType} from "../../../NiFiObjects/Types/RevisionType";
import {PermissionType} from "../../../NiFiObjects/Types/PermissionType";
import {UserGroupType} from "../../../NiFiObjects/Types/SecureTypes/UserGroup/UserGroupType";
import {UserGroupEntity} from "../../../NiFiObjects/SecureObjects/UserGroup/UserGroupEntity";


export class UserGroupEntityBuilder implements UserGroupEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    disconnectedNodeAcknowledged: boolean;
    component: UserGroupType;

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

    setComponent(component: UserGroupType) {
        this.component = component;
        return this;
    }

    build() {
        return new UserGroupEntity(this);
    }
}