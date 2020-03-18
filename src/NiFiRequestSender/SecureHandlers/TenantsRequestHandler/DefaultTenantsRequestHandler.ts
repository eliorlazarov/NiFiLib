import {TenantsRequestHandler} from "./TenantsRequestHandler";
import {UserGroupEntityType} from "../../../NiFiObjects/Types/SecureTypes/UserGroup/UserGroupEntityType";
import {isNullOrUndefined} from "util";

export class DefaultTenantsRequestHandler extends TenantsRequestHandler {

    url = `/tenants`;

    async createGroup(groupName: string, users: object[]): Promise<string> {
        let body = {
            revision: {
                version: 0
            },
            component: {
                identity: groupName,
                users: users
            }
        };
        let result = await this.Post(this.url + `/user-groups`, body);
        return result['id'] as string;
    }

    async createUser(username: string, permissions?: object): Promise<string> {
        let body = {
            revision: {
                version: 0
            },
            component: {
                identity: username
            }
        };
        if (!isNullOrUndefined(permissions)) {
            body['permissions'] = permissions
        }
        let result = await this.Post(this.url + `/users`, body);
        return result['id'] as string
    }

    async getGroup(groupId: string): Promise<UserGroupEntityType> {
        return await this.Get(this.url + `/user-groups/${groupId}`) as UserGroupEntityType;
    }

    async getSearchResults(query: string): Promise<object> {
        return await this.Get(this.url + `/search-results?q=${encodeURIComponent(query)}`) as object;
    }

    //Todo: check if needed
    // async queryUsers(query: string): Promise<object> {
    //     return await this.Get(this.url + `/search-results?q=${query}`) as object;
    // }

    async updateGroup(groupId: string, groupName: string, users: object[], accessPolicies: Array<object>, version: number): Promise<UserGroupEntityType> {
        let body = {
            revision: {
                version: version
            }, component: {
                id: groupId,
                identity: groupName,
                users: users,
                accessPolicies: accessPolicies
            }
        };
        return await this.Put(this.url + `/user-groups/${groupId}`, body) as UserGroupEntityType;
    }

}