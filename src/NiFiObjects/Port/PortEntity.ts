import {PortType} from "../Types/Port/PortType";
import {PositionType} from "../Types/PositionType";
import {PortEntityType} from "../Types/Port/PortEntityType";
import {PermissionType} from "../Types/PermissionType";
import {RevisionType} from "../Types/RevisionType";
import {PortEntityBuilder} from "../../NiFiObjectBuilder/PortBuilder/PortEntityBuilder";


export class PortEntity implements PortEntityType {
    bulletins: object[];
    component: PortType;
    disconnectedNodeAcknowledged: boolean;
    id: string;
    operatePermissions: PermissionType;
    permissions: PermissionType;
    portType: string;
    position: PositionType;
    revision: RevisionType;
    uri: string;


    constructor(portEntityBuilder: PortEntityBuilder) {
        this.bulletins = portEntityBuilder.bulletins;
        this.component = portEntityBuilder.component;
        this.disconnectedNodeAcknowledged = portEntityBuilder.disconnectedNodeAcknowledged;
        this.id = portEntityBuilder.id;
        this.operatePermissions = portEntityBuilder.operatePermissions;
        this.permissions = portEntityBuilder.permissions;
        this.portType = portEntityBuilder.portType;
        this.position = portEntityBuilder.position;
        this.revision = portEntityBuilder.revision;
        this.uri = portEntityBuilder.uri;

    }


    public getBulletins(): object[] {
        return this.bulletins;
    }

    public getComponent(): PortType {
        return this.component;
    }

    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged;
    }

    public getId(): string {
        return this.id;
    }

    public getPermissions(): PermissionType {
        return this.permissions;
    }

    public getOperatePermissions(): PermissionType {
        return this.operatePermissions;
    }

    public getPortType(): string {
        return this.portType;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getRevision(): RevisionType {
        return this.revision;
    }

    public getUri(): string {
        return this.uri;
    }
}