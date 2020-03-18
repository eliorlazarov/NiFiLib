import {PositionType} from "../../../NiFiObjects/Types/PositionType";
import {AccessPolicyType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyType";
import {TenantEntityType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantEntityType";
import {AccessPolicy} from "../../../NiFiObjects/SecureObjects/AccessPolicy/AccessPolicy";


export class AccessPolicyBuilder implements AccessPolicyType {
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

    setId(id: string) {
        this.id = id;
        return this;
    }

    setVersionComponentId(versionComponentId: string) {
        this.versionedComponentId = versionComponentId;
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

    setResource(resource: string) {
        this.resource = resource;
        return this;
    }

    setAction(action: string) {
        this.action = action;
        return this;
    }

    setComponentReference(componentReference: object) {
        this.componentReference = componentReference;
        return this;
    }

    setConfigurable(configurable: boolean) {
        this.configurable = configurable;
        return this;
    }

    setUsers(users: TenantEntityType[]) {
        this.users = users;
        return this;
    }

    setUserGroups(userGroups: TenantEntityType[]) {
        this.userGroups = userGroups;
        return this;
    }

    build() {
        return new AccessPolicy(this);
    }
}