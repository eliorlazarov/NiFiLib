import {ConnectionType} from "../../NiFiObjects/Types/Connection/ConnectionType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {ConnectionEntityType} from "../../NiFiObjects/Types/Connection/ConnectionEntityType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {ConnectionEntity} from "../../NiFiObjects/Connection/ConnectionEntity";

export class ConnectionEntityBuilder implements ConnectionEntityType {


    component: ConnectionType;
    id: string;
    permissions: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;

    setId(id: string) {
        this.id = id;
        return this;
    }

    setComponent(component: ConnectionType) {
        this.component = component;
        return this;
    }

    setPermissions(permissions: PermissionType) {
        this.permissions = permissions;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }


    setRevision(revision: RevisionType) {
        this.revision = revision;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }

    build() {
        return new ConnectionEntity(this);
    }


}