import {TenantEntityType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantEntityType";
import {RevisionType} from "../../../NiFiObjects/Types/RevisionType";
import {PermissionType} from "../../../NiFiObjects/Types/PermissionType";
import {TenantType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantType";
import {TenantEntity} from "../../../NiFiObjects/SecureObjects/Tenant/TenantEntity";
import {PositionType} from "../../../NiFiObjects/Types/PositionType";


export class TenantEntityBuilder implements TenantEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: TenantType;

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

    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this;
    }

    setComponent(component: TenantType) {
        this.component = component;
        return this;
    }

    build() {
        return new TenantEntity(this);
    }
}