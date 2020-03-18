import {TenantEntityType} from "./TenantEntityType";

export type TenantsEntityType = {
    users:TenantEntityType[];
    userGroups:TenantEntityType[];
}