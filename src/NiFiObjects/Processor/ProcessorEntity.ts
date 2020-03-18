import {PositionType} from "../Types/PositionType";
import {ProcessorEntityType} from "../Types/Processor/ProcessorEntityType";
import {RevisionType} from "../Types/RevisionType";
import {PermissionType} from "../Types/PermissionType";
import {ProcessorType} from "../Types/Processor/ProcessorType";
import {ProcessorEntityBuilder} from "../../NiFiObjectBuilder/ProcessorBuilder/ProcessorEntityBuilder";


export class ProcessorEntity implements ProcessorEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permissions: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: ProcessorType;
    inputRequirements: string;
    status?: object;
    operatePermissions: PermissionType;

    constructor(processorEntityBuilder: ProcessorEntityBuilder) {
        this.revision = processorEntityBuilder.revision;
        this.id = processorEntityBuilder.id;
        this.uri = processorEntityBuilder.uri;
        this.position = processorEntityBuilder.position;
        this.permissions = processorEntityBuilder.permissions;
        this.bulletins = processorEntityBuilder.bulletins;
        this.disconnectedNodeAcknowledged = processorEntityBuilder.disconnectedNodeAcknowledged;
        this.component = processorEntityBuilder.component;
        this.inputRequirements = processorEntityBuilder.inputRequirements;
        this.status = processorEntityBuilder.status;
        this.operatePermissions = processorEntityBuilder.operatePermissions;
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

    public getBulletins(): object[] {
        return this.bulletins;
    }


    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged;
    }

    public getComponent(): ProcessorType {
        return this.component;
    }

    public getInputRequirements(): string {
        return this.inputRequirements;
    }

    public getStatus(): object {
        return this.status;
    }

    public getOperatePermissions(): PermissionType {
        return this.operatePermissions;
    }
}