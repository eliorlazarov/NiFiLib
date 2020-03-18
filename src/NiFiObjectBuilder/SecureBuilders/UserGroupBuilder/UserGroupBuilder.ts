import {PositionType} from "../../../NiFiObjects/Types/PositionType";
import {UserGroupType} from "../../../NiFiObjects/Types/SecureTypes/UserGroup/UserGroupType";
import {AccessPolicyEntityType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";
import {TenantEntityType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantEntityType";
import {UserGroup} from "../../../NiFiObjects/SecureObjects/UserGroup/UserGroup";


export class UserGroupBuilder implements UserGroupType {
    accessPolicies: AccessPolicyEntityType[];
    configurable: boolean;
    id: string;
    identity: string;
    parentGroupId: string;
    position: PositionType;
    users: TenantEntityType[];
    versionedComponentId: string;

    setAccessPolicies(accessPolicies: AccessPolicyEntityType[]) {
        this.accessPolicies = accessPolicies;
        return this;
    }

    setConfigurable(configurable: boolean) {
        this.configurable = configurable;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    setIdentity(identity: string) {
        this.identity = identity;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId = parentGroupId;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setUsers(users: TenantEntityType[]) {
        this.users = users;
        return this;
    }


    setVersionedComponentId(versionedComponentId: string) {
        this.versionedComponentId = versionedComponentId;
        return this;
    }

    build() {
        return new UserGroup(this);
    }


}