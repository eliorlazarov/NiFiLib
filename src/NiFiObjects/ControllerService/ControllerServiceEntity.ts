import {ControllerServiceEntityType} from "../Types/ControllerService/ControllerServiceEntityType";
import {RevisionType} from "../Types/RevisionType";
import {ControllerServiceType} from "../Types/ControllerService/ControllerServiceType";
import {ControllerServiceEntityBuilder} from "../../NiFiObjectBuilder/ControllerServiceBuilder/ControllerServiceEntityBuilder";
import {PermissionType} from "../Types/PermissionType";
import {PositionType} from "../Types/PositionType";
import {ControllerServiceStatusType} from "../Types/ControllerService/ControllerServiceStatusType";

export class ControllerServiceEntity implements ControllerServiceEntityType {
    revision: RevisionType;
    component: ControllerServiceType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    id: string;
    uri: string;
    operatePermissions: PermissionType;
    parentGroupId: string;
    permission: PermissionType;
    position: PositionType;
    status: ControllerServiceStatusType;

    constructor(controllerServiceEntityBuilder: ControllerServiceEntityBuilder) {
        this.revision = controllerServiceEntityBuilder.revision;
        this.component = controllerServiceEntityBuilder.component;
        this.bulletins = controllerServiceEntityBuilder.bulletins;
        this.disconnectedNodeAcknowledged = controllerServiceEntityBuilder.disconnectedNodeAcknowledged;
        this.id = controllerServiceEntityBuilder.id;
        this.uri = controllerServiceEntityBuilder.uri;
        this.operatePermissions = controllerServiceEntityBuilder.operatePermissions;
        this.parentGroupId = controllerServiceEntityBuilder.parentGroupId;
        this.permission = controllerServiceEntityBuilder.permission;
        this.position = controllerServiceEntityBuilder.position;
        this.status = controllerServiceEntityBuilder.status;

    }

    public getRevision(): RevisionType {
        return this.revision;
    }

    public getComponent(): ControllerServiceType {
        return this.component;
    }

    public getBulletins(): object[] {
        return this.bulletins;
    }

    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged;
    }

    public getId(): string {
        return this.id;
    }

    public getUri(): string {
        return this.uri;
    }

    public getOperatePermission(): PermissionType {
        return this.operatePermissions;
    }

    public getParentGroup(): string {
        return this.parentGroupId;
    }

    public getPermission(): PermissionType {
        return this.permission;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getStatus(): ControllerServiceStatusType {
        return this.status;
    }


}