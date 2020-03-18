import {ProcessGroupType} from "../Types/ProcessGroup/ProcessGroupType";
import {PositionType} from "../Types/PositionType";
import {ProcessGroupEntityType} from "../Types/ProcessGroup/ProcessGroupEntityType";
import {RevisionType} from "../Types/RevisionType";
import {PermissionType} from "../Types/PermissionType";
import {ProcessGroupEntityBuilder} from "../../NiFiObjectBuilder/ProcessGroupBuilder/ProcessGroupEntityBuilder";


export class ProcessGroupEntity implements ProcessGroupEntityType {

    bulletins: object[];
    component: ProcessGroupType;
    disconnectedNodeAcknowledged: boolean;
    id: string;
    permission: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;

    constructor(processGroupEntityBuilder: ProcessGroupEntityBuilder) {
        this.bulletins = processGroupEntityBuilder.bulletins;
        this.component = processGroupEntityBuilder.component;
        this.disconnectedNodeAcknowledged = processGroupEntityBuilder.disconnectedNodeAcknowledged;
        this.id = processGroupEntityBuilder.id;
        this.permission = processGroupEntityBuilder.permission;
        this.position = processGroupEntityBuilder.position;
        this.revision = processGroupEntityBuilder.revision;
        this.uri = processGroupEntityBuilder.uri;
    }

    public getBulletins(): object[] {
        return this.bulletins;
    }

    public getComponent(): ProcessGroupType {
        return this.component;
    }

    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged;
    }

    public getId(): string {
        return this.id;
    }

    public getPermission(): PermissionType {
        return this.permission;
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