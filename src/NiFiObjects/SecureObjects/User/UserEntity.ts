import {RevisionType} from "../../Types/RevisionType";
import {PositionType} from "../../Types/PositionType";
import {PermissionType} from "../../Types/PermissionType";
import {UserEntityType} from "../../Types/SecureTypes/User/UserEntityType";
import {UserType} from "../../Types/SecureTypes/User/UserType";
import {UserEntityBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/UserBuilder/UserEntityBuilder";

export class UserEntity implements UserEntityType{

    revision: RevisionType;
    id: string;
    uri: string;
    permissions: PermissionType;
    disconnectedNodeAcknowledged: boolean;
    bulletins: object[];
    position: PositionType;
    component: UserType;

    constructor(userEntityBuilder: UserEntityBuilder) {
        this.revision = userEntityBuilder.revision;
        this.id = userEntityBuilder.id;
        this.uri = userEntityBuilder.uri;
        this.permissions = userEntityBuilder.permissions;
        this.disconnectedNodeAcknowledged = userEntityBuilder.disconnectedNodeAcknowledged;
        this.component = userEntityBuilder.component;
        this.bulletins = userEntityBuilder.bulletins;
        this.position = userEntityBuilder.position;

    }

    public getRevision(): RevisionType {
        return this.revision;
    }

    public getId(): string {
        return this.id;
    }

    public getUri(): string {
        return this.uri;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getPermissions(): PermissionType {
        return this.permissions;
    }

    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged
    }

    public getComponent(): UserType {
        return this.component;
    }



}