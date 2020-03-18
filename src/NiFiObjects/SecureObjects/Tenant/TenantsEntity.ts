import {TenantEntityType} from "../../Types/SecureTypes/Tenant/TenantEntityType";
import {TenantsEntityType} from "../../Types/SecureTypes/Tenant/TenantsEntityType";
import {TenantsEntityBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/TentantBuilder/TenantsEntityBuilder";


export class TenantsEntity implements TenantsEntityType {
    users: TenantEntityType[];
    userGroups: TenantEntityType[];

    constructor(tenantsEntityBuilder: TenantsEntityBuilder) {
        this.users = tenantsEntityBuilder.users;
        this.userGroups = tenantsEntityBuilder.userGroups;
    }

    public getUsers(): TenantEntityType[] {
        return this.users;
    }

    public getUserGroups(): TenantEntityType[] {
        return this.userGroups;
    }



}