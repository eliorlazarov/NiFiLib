import {PositionType} from "../../Types/PositionType";
import {TenantEntityType} from "../../Types/SecureTypes/Tenant/TenantEntityType";
import {AccessPolicyEntityType} from "../../Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";
import {UserType} from "../../Types/SecureTypes/User/UserType";
import {UserBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/UserBuilder/UserBuilder";

export class User implements UserType {

    accessPolicies: AccessPolicyEntityType[];
    configurable: boolean;
    id: string;
    identity: string;
    parentGroupId: string;
    position: PositionType;
    userGroups: TenantEntityType[];
    versionedComponentId: string;

    constructor(userBuilder: UserBuilder) {
        this.accessPolicies = userBuilder.accessPolicies;
        this.configurable = userBuilder.configurable;
        this.id = userBuilder.id;
        this.identity = userBuilder.identity;
        this.parentGroupId = userBuilder.parentGroupId;
        this.position = userBuilder.position;
        this.userGroups = userBuilder.userGroups;
        this.versionedComponentId = userBuilder.versionedComponentId;

    }

    public getAccessPolicies(): AccessPolicyEntityType[] {
        return this.accessPolicies;
    }

    public getConfigurable(): boolean {
        return this.configurable;
    }

    public getId(): string {
        return this.id;
    }

    public getIdentity(): string {
        return this.identity;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getUserGroups(): TenantEntityType[] {
        return this.userGroups;
    }


    public getVersionedComponentId(): string {
        return this.versionedComponentId;
    }


}