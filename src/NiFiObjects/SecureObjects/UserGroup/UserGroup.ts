import {PositionType} from "../../Types/PositionType";
import {UserGroupType} from "../../Types/SecureTypes/UserGroup/UserGroupType";
import {UserGroupBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/UserGroupBuilder/UserGroupBuilder";
import {TenantEntityType} from "../../Types/SecureTypes/Tenant/TenantEntityType";
import {AccessPolicyEntityType} from "../../Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";

export class UserGroup implements UserGroupType {

    accessPolicies: AccessPolicyEntityType[];
    configurable: boolean;
    id: string;
    identity: string;
    parentGroupId: string;
    position: PositionType;
    users: TenantEntityType[];
    versionedComponentId: string;

    constructor(userGroupBuilder: UserGroupBuilder) {
        this.accessPolicies = userGroupBuilder.accessPolicies;
        this.configurable = userGroupBuilder.configurable;
        this.id = userGroupBuilder.id;
        this.identity = userGroupBuilder.identity;
        this.parentGroupId = userGroupBuilder.parentGroupId;
        this.position = userGroupBuilder.position;
        this.users = userGroupBuilder.users;
        this.versionedComponentId = userGroupBuilder.versionedComponentId;

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

    public getUsers(): TenantEntityType[] {
        return this.users;
    }


    public getVersionedComponentId(): string {
        return this.versionedComponentId;
    }


}