import {PositionType} from "../../../NiFiObjects/Types/PositionType";
import {AccessPolicyEntityType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";
import {TenantEntityType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantEntityType";
import {UserType} from "../../../NiFiObjects/Types/SecureTypes/User/UserType";
import {User} from "../../../NiFiObjects/SecureObjects/User/User";


export class UserBuilder implements UserType {
    accessPolicies: AccessPolicyEntityType[];
    configurable: boolean;
    id: string;
    identity: string;
    parentGroupId: string;
    position: PositionType;
    userGroups: TenantEntityType[];
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

    setUserGroups(userGroups: TenantEntityType[]) {
        this.userGroups = userGroups;
        return this;
    }


    setVersionedComponentId(versionedComponentId: string) {
        this.versionedComponentId = versionedComponentId;
        return this;
    }

    build() {
        return new User(this);
    }


}