import {PositionType} from "../../Types/PositionType";
import {AccessPolicyType} from "../../Types/SecureTypes/AccessPolicy/AccessPolicyType";
import {TenantEntityType} from "../../Types/SecureTypes/Tenant/TenantEntityType";
import {AccessPolicyBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/AccessPolicyBuilder/AccessPolicyBuilder";

export class AccessPolicy implements AccessPolicyType {
    id: string;
    versionedComponentId: string;
    parentGroupId: string;
    position: PositionType;
    resource: string;
    action: string;
    componentReference: object;
    configurable: boolean;
    users: TenantEntityType[];
    userGroups: TenantEntityType[];

    constructor(accessPolicyBuilder: AccessPolicyBuilder) {
        this.id = accessPolicyBuilder.id;
        this.versionedComponentId = accessPolicyBuilder.versionedComponentId;
        this.parentGroupId = accessPolicyBuilder.parentGroupId;
        this.position = accessPolicyBuilder.position;
        this.resource = accessPolicyBuilder.resource;
        this.action = accessPolicyBuilder.action;
        this.componentReference = accessPolicyBuilder.componentReference;
        this.configurable = accessPolicyBuilder.configurable;
        this.users = accessPolicyBuilder.users;
        this.userGroups = accessPolicyBuilder.userGroups;

    }

    public getId(): string {
        return this.id;
    }

    public getVersionComponentId(): string {
        return this.versionedComponentId;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getResource(): string {
        return this.resource;
    }

    public getAction(): string {
        return this.action;
    }

    public getComponentReference(): object {
        return this.componentReference;
    }

    public getConfigurable(): boolean {
        return this.configurable;
    }

    public getUsers(): TenantEntityType[] {
        return this.users;
    }

    public getUserGroups(): TenantEntityType[] {
        return this.userGroups;
    }

}
