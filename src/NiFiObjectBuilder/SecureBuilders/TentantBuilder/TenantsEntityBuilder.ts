import {TenantEntityType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantEntityType";
import {TenantsEntityType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantsEntityType";
import {TenantsEntity} from "../../../NiFiObjects/SecureObjects/Tenant/TenantsEntity";


export class TenantsEntityBuilder implements TenantsEntityType {
    users: TenantEntityType[];
    userGroups: TenantEntityType[];


    setUsers(users: TenantEntityType[]) {
        this.users = users;
        return this;
    }

    setUserGroups(userGroups: TenantEntityType[]) {
        this.userGroups = userGroups;
        return this;
    }
    build() {
        return new TenantsEntity(this);
    }
}