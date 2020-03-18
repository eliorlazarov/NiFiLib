import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {PortEntityType} from "../../NiFiObjects/Types/Port/PortEntityType";
import {PortType} from "../../NiFiObjects/Types/Port/PortType";
import {PortEntity} from "../../NiFiObjects/Port/PortEntity";

export class PortEntityBuilder implements PortEntityType {

    bulletins: object[];
    component: PortType;
    disconnectedNodeAcknowledged: boolean;
    id: string;
    permissions: PermissionType;
    operatePermissions: PermissionType;
    position: PositionType;
    portType: string;
    revision: RevisionType;
    uri: string;

    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setComponent(component: PortType) {
        this.component = component;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
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

    setOperatePermissions(operatePermissions: PermissionType) {
        this.operatePermissions = operatePermissions;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setPortType(portType:string){
        this.portType = portType;
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
        return new PortEntity(this);
    }


}