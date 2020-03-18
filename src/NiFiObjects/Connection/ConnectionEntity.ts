import {ConnectionType} from "../Types/Connection/ConnectionType";
import {PositionType} from "../Types/PositionType";
import {ConnectionEntityType} from "../Types/Connection/ConnectionEntityType";
import {PermissionType} from "../Types/PermissionType";
import {RevisionType} from "../Types/RevisionType";
import {ConnectionEntityBuilder} from "../../NiFiObjectBuilder/ConnectionBuilder/ConnectionEntityBuilder";

export class ConnectionEntity implements ConnectionEntityType {

    component: ConnectionType;
    id: string;
    permissions: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;

    constructor(connectionEntityBuilder: ConnectionEntityBuilder) {
        this.id = connectionEntityBuilder.id;
        this.component = connectionEntityBuilder.component;
        this.position = connectionEntityBuilder.position;
        this.permissions = connectionEntityBuilder.permissions;
        this.revision = connectionEntityBuilder.revision;
        this.uri = connectionEntityBuilder.uri;

    }

    public getId(): string {
        return this.id;
    }

    public getComponent(): ConnectionType {
        return this.component;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getPermissions(): PermissionType {
        return this.permissions;
    }

    public getRevision(): RevisionType {
        return this.revision;
    }

    public getUri(): string {
        return this.uri;
    }


}