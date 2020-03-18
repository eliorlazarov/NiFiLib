import {PoliciesRequestHandler} from "./PoliciesRequestHandler";
import {AccessPolicyEntityType} from "../../../NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyEntityType";

export class DefaultPoliciesRequestHandler extends PoliciesRequestHandler {

    url = `/policies`;

    async addUserToPolicy(policy: object, userIdentifier: string, userName: string): Promise<AccessPolicyEntityType> {
        return await this.Put(this.url + `/${policy['id']}`, this.extractPolicyParameters(policy, userIdentifier, userName)) as AccessPolicyEntityType;

    }

    private extractPolicyParameters(policy: object, userIdentifier: string, userName: string) {
        let newPolicy = {
            revision: policy['revision'],
            component: policy['component']
        };
        delete newPolicy['component']['componentReference'];
        delete newPolicy['component']['configurable'];
        delete newPolicy['component']['resource'];
        delete newPolicy['component']['action'];

        let newUser = {
            revision: {
                version: 0
            },
            id: userIdentifier,
            component: {
                id: userIdentifier,
                identity: userName,
                configurable: true
            }
        };
        newPolicy['component']['users'].push(newUser);

        return newPolicy;
    }

    async createPolicyWithGroupPermission(action: string, resource: string, groupName: string, groupId: string): Promise<string> {
        let body = {
            revision: {
                version: 0
            },
            component: {
                action: action,
                resource: resource,
                users: [],
                userGroups: [
                    {
                        id: groupId,
                        permissions: {
                            canRead: true,
                            canWrite: true
                        },
                        component: {
                            id: groupId,
                            identity: groupName,
                            configurable: true
                        }
                    }
                ]
            }
        };
        let result = await this.Post(this.url, body);
        return result['id'] as string;
    }

    async createPolicyWithUserPermission(action: string, resource: string, userName: string, userIdentifier: string): Promise<string> {
        const body = {
            revision: {
                version: 0
            },
            component: {
                action: action,
                resource: '/' + resource,
                users: [
                    {
                        id: userIdentifier,
                        component: {
                            id: userIdentifier,
                            identity: userName,
                            configurable: true
                        }
                    }
                ],
                userGroups: []
            }
        };
        let result = await this.Post(this.url, body);
        return result['id'] as string;
    }

    async getPolicy(action: string, resourceId?: string): Promise<AccessPolicyEntityType> {
        let requestUrl :string = resourceId ? this.url + `/${action}/${resourceId}` : this.url + `/${action}`;
        return await this.Get(requestUrl) as AccessPolicyEntityType;
    }

}