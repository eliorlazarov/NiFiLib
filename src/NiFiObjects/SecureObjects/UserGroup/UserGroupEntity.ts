import {UserGroupEntityType} from "../../Types/SecureTypes/UserGroup/UserGroupEntityType";
import {RevisionType} from "../../Types/RevisionType";
import {PositionType} from "../../Types/PositionType";
import {PermissionType} from "../../Types/PermissionType";
import {UserGroupType} from "../../Types/SecureTypes/UserGroup/UserGroupType";
import {UserGroupEntityBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/UserGroupBuilder/UserGroupEntityBuilder";

export class UserGroupEntity implements UserGroupEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    disconnectedNodeAcknowledged: boolean;
    component: UserGroupType;

    constructor(userGroupEntityBuilder: UserGroupEntityBuilder) {
        this.revision = userGroupEntityBuilder.revision;
        this.id = userGroupEntityBuilder.id;
        this.uri = userGroupEntityBuilder.uri;
        this.position = userGroupEntityBuilder.position;
        this.permissions = userGroupEntityBuilder.permissions;
        this.disconnectedNodeAcknowledged = userGroupEntityBuilder.disconnectedNodeAcknowledged;
        this.component = userGroupEntityBuilder.component;

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

    public getComponent(): UserGroupType {
        return this.component;
    }

}