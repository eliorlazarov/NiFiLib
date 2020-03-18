
import {RevisionType} from "../../Types/RevisionType";
import {PermissionType} from "../../Types/PermissionType";
import {TenantType} from "../../Types/SecureTypes/Tenant/TenantType";
import {TenantEntityType} from "../../Types/SecureTypes/Tenant/TenantEntityType";
import {TenantEntityBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/TentantBuilder/TenantEntityBuilder";
import {PositionType} from "../../Types/PositionType";


export class TenantEntity implements TenantEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: TenantType;

    constructor(tentantEntityBuilder: TenantEntityBuilder) {
        this.revision = tentantEntityBuilder.revision;
        this.id = tentantEntityBuilder.id;
        this.uri = tentantEntityBuilder.uri;
        this.position = tentantEntityBuilder.position;
        this.permissions = tentantEntityBuilder.permissions;
        this.bulletins = tentantEntityBuilder.bulletins;
        this.disconnectedNodeAcknowledged = tentantEntityBuilder.disconnectedNodeAcknowledged;
        this.component = tentantEntityBuilder.component;
    }

    public getRevision(): RevisionType {
        return this.revision;
    }

    public getId(): string {
        return this.id;
    }

    public getUri(): string {
        return this.uri;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getPermissions(): PermissionType {
        return this.permissions;
    }

    public getBulletins(): object[] {
        return this.bulletins;
    }

    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged;
    }

    public getComponent(): TenantType {
        return this.component;
    }


}