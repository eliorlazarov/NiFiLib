import {TenantEntityType} from "../Tenant/TenantEntityType";
import {PositionType} from "../../PositionType";

export type AccessPolicyType = {
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
}