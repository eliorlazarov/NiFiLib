import {PermissionType} from "./Types/PermissionType";
import {PermissionBuilder} from "../NiFiObjectBuilder/PermissionBuilder";


export class Permission implements PermissionType{
    canRead: boolean;
    canWrite: boolean;

    constructor(permissionBuilder: PermissionBuilder) {
        this.canRead = permissionBuilder.canRead;
        this.canWrite = permissionBuilder.canWrite;
    }


    public getCanRead(): boolean {
        return this.canRead;
    }

    public getCanWrite(): boolean {
        return this.canWrite;
    }
}