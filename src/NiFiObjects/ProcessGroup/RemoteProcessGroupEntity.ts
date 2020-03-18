import {RemoteProcessGroupType} from "../Types/ProcessGroup/RemoteProcessGroupType";
import {PositionType} from "../Types/PositionType";
import {RemoteProcessGroupEntityType} from "../Types/ProcessGroup/RemoteProcessGroupEntityType";
import {RevisionType} from "../Types/RevisionType";
import {PermissionType} from "../Types/PermissionType";
import {RemoteProcessGroupEntityBuilder} from "../../NiFiObjectBuilder/ProcessGroupBuilder/RemoteProcessGroupEntityBuilder";

export class RemoteProcessGroupEntity implements RemoteProcessGroupEntityType {

    bulletins: object[];
    component: RemoteProcessGroupType;
    disconnectedNodeAcknowledged: boolean;
    id: string;
    operatePermissions: PermissionType;
    permissions: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;

    constructor(remoteProcessGroupEntityBuilder: RemoteProcessGroupEntityBuilder) {
        this.bulletins = remoteProcessGroupEntityBuilder.bulletins;
        this.component = remoteProcessGroupEntityBuilder.component;
        this.disconnectedNodeAcknowledged = remoteProcessGroupEntityBuilder.disconnectedNodeAcknowledged;
        this.id = remoteProcessGroupEntityBuilder.id;
        this.operatePermissions = remoteProcessGroupEntityBuilder.operatePermissions;
        this.permissions = remoteProcessGroupEntityBuilder.permissions;
        this.position = remoteProcessGroupEntityBuilder.position;
        this.revision = remoteProcessGroupEntityBuilder.revision;
        this.uri = remoteProcessGroupEntityBuilder.uri;

    }

    public getBulletins(): object[] {
        return this.bulletins;
    }

    public getComponent(): RemoteProcessGroupType {
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