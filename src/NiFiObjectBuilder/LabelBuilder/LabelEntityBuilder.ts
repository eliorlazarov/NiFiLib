import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {LabelType} from "../../NiFiObjects/Types/Label/LabelType";
import {LabelEntityType} from "../../NiFiObjects/Types/Label/LabelEntityType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {LabelEntity} from "../../NiFiObjects/Label/LabelEntity";


export class LabelEntityBuilder implements LabelEntityType {
    bulletins: object[];
    component: LabelType;
    id: string;
    permissions: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;


    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setComponent(component: LabelType) {
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
        return new LabelEntity(this);
    }


}