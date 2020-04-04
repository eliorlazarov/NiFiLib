import {UserGroupEntityType} from "../../../NiFiObjects/Types/SecureTypes/UserGroup/UserGroupEntityType";
import {AbstractRequestHandler} from "../../AbstractRequestHandler";

export interface ITenantsRequestHandler {

    createUser(username: string, permissions?: object): Promise<string>

    getGroup(groupId: string): Promise<UserGroupEntityType>

    updateGroup(groupId: string, groupName: string, users: Array<object>, accessPolicies: object[], version: number): Promise<UserGroupEntityType>

    createGroup(groupName: string, users: object[]): Promise<string>

    getSearchResults(query: string): Promise<object>

     //TODO change this to modern icecube interface (with builders and objects)

}