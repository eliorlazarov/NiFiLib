import {PositionType} from "../../../NiFiObjects/Types/PositionType";
import {AccessPolicyEntityType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";
import {RevisionType} from "../../../NiFiObjects/Types/RevisionType";
import {PermissionType} from "../../../NiFiObjects/Types/PermissionType";
import {AccessPolicyType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyType";
import {AccessPolicyEntity} from "../../../NiFiObjects/SecureObjects/AccessPolicy/AccessPolicyEntity";


export class AccessPolicyEntityBuilder implements AccessPolicyEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    generated: string;
    component: AccessPolicyType;

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

    setBuiletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this;
    }

    setGenerated(generated: string) {
        this.generated = generated;
        return this;
    }

    setComponent(component: AccessPolicyType) {
        this.component = component;
        return this;
    }

    build() {
        return new AccessPolicyEntity(this);
    }
}