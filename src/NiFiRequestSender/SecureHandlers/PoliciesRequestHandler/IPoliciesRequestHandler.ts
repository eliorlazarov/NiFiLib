import {AccessPolicyEntityType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";

export interface IPoliciesRequestHandler {
    getPolicy(resource: string, resourceId?: string): Promise<AccessPolicyEntityType>

    addUserToPolicy(policy: object, userIdentifier: string, userName: string): Promise<AccessPolicyEntityType>

    createPolicyWithUserPermission(action: string, resource: string, userName: string, userIdentifier: string): Promise<string>

    createPolicyWithGroupPermission(action: string, resource: string, groupName: string, groupId: string): Promise<string>
} //TODO change this to modern icecube interface (with builders and objects)

