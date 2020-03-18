import {PermissionType} from "../NiFiObjects/Types/PermissionType";
import {Permission} from "../NiFiObjects/Permission";


export class PermissionBuilder implements PermissionType {
    canRead: boolean;
    canWrite: boolean;

    setCanRead(canRead: boolean) {
        this.canRead = canRead;
        return this;
    }

    setCanWrite(canWrite: boolean) {
        this.canWrite = canWrite;
        return this;
    }

    build() {
        return new Permission(this);
    }
}