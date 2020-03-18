import {RevisionType} from "../../Types/RevisionType";
import {PositionType} from "../../Types/PositionType";
import {PermissionType} from "../../Types/PermissionType";
import {AccessPolicyEntityType} from "../../Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";
import {AccessPolicyType} from "../../Types/SecureTypes/AccessPolicy/AccessPolicyType";
import {AccessPolicyEntityBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/AccessPolicyBuilder/AccessPolicyEntityBuilder";

export class AccessPolicyEntity implements AccessPolicyEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    generated: string;
    component: AccessPolicyType;

    constructor(accessPolicyEntityBuilder: AccessPolicyEntityBuilder) {
        this.revision = accessPolicyEntityBuilder.revision;
        this.id = accessPolicyEntityBuilder.id;
        this.uri = accessPolicyEntityBuilder.uri;
        this.position = accessPolicyEntityBuilder.position;
        this.permissions = accessPolicyEntityBuilder.permissions;
        this.bulletins = accessPolicyEntityBuilder.bulletins;
        this.disconnectedNodeAcknowledged = accessPolicyEntityBuilder.disconnectedNodeAcknowledged;
        this.generated = accessPolicyEntityBuilder.generated;
        this.component = accessPolicyEntityBuilder.component;

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

    public getGenerated(): string {
        return this.generated;
    }

    public getComponent(): AccessPolicyType {
        return this.component;
    }

}
