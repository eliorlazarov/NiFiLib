import {AbstractRequestHandler} from "../../AbstractRequestHandler";
import {AccessPolicyEntityType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";

export abstract class PoliciesRequestHandler extends AbstractRequestHandler {
    public abstract async getPolicy(resource: string, resourceId?: string): Promise<AccessPolicyEntityType>

    public abstract async addUserToPolicy(policy: object, userIdentifier: string, userName: string): Promise<AccessPolicyEntityType>

    public abstract async createPolicyWithUserPermission(action: string, resource: string, userName: string, userIdentifier: string): Promise<string>

    public abstract async createPolicyWithGroupPermission(action: string, resource: string, groupName: string, groupId: string): Promise<string>
}

