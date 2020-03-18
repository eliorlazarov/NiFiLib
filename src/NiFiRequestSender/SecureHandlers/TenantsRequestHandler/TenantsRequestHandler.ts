import {UserGroupEntityType} from "../../../NiFiObjects/Types/SecureTypes/UserGroup/UserGroupEntityType";
import {AbstractRequestHandler} from "../../AbstractRequestHandler";

export abstract class TenantsRequestHandler extends AbstractRequestHandler {

    public abstract createUser(username: string, permissions?: object): Promise<string>

    public abstract getGroup(groupId: string): Promise<UserGroupEntityType>

    public abstract updateGroup(groupId: string, groupName: string, users: Array<object>, accessPolicies: object[], version: number): Promise<UserGroupEntityType>

    public abstract createGroup(groupName: string, users: object[]): Promise<string>

    public abstract getSearchResults(query: string): Promise<object>

    // public abstract queryUsers(query: string): Promise<object>

}