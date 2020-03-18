import {FunnelType} from "../../NiFiObjects/Types/Funnel/FunnelType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {FunnelEntityType} from "../../NiFiObjects/Types/Funnel/FunnelEntityType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {FunnelEntity} from "../../NiFiObjects/Funnel/FunnelEntity";


export class FunnelEntityBuilder implements FunnelEntityType {
    component: FunnelType;
    id: string;
    permissions: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;


    setComponent(component: FunnelType) {
        this.component = component;
        return this;
    }

    setId(id: string) {
        this.id = id;
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
        return new FunnelEntity(this);
    }

}