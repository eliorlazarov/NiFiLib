import {PositionType} from "../../PositionType";
import {TenantEntityType} from "../Tenant/TenantEntityType";
import {AccessPolicyEntityType} from "../AccessPolicy/AccessPolicyEntityType";

export type UserType = {
    id: string
    versionedComponentId: string
    parentGroupId: string
    position: PositionType
    identity: string
    configurable: boolean
    userGroups: TenantEntityType[]
    accessPolicies: AccessPolicyEntityType[]
}