import {ProcessorType} from "../Types/Processor/ProcessorType";
import {RevisionType} from "../Types/RevisionType";
import {PositionType} from "../Types/PositionType";
import {RelationShipType} from "../Types/RelationShipType";
import {PermissionType} from "../Types/PermissionType";
import {ProcessorConfigType} from "../Types/Processor/ProcessorConfigType";
import {ProcessorBuilder} from "../../NiFiObjectBuilder/ProcessorBuilder/ProcessorBuilder";


export class Processor implements ProcessorType {
    revision: RevisionType;
    id: string;
    url: string;
    position: PositionType;
    relationships: RelationShipType[];
    permissions: PermissionType;
    config: ProcessorConfigType;

    constructor(processorBuilder: ProcessorBuilder) {
        this.revision = processorBuilder.revision;
        this.id = processorBuilder.id;
        this.url = processorBuilder.url;
        this.position = processorBuilder.position;
        this.relationships = processorBuilder.relationships;
        this.permissions = processorBuilder.permissions;
        this.config = processorBuilder.config;
    }

    public getRevision(): RevisionType {
        return this.revision;
    }

    public getId(): string {
        return this.id;
    }

    public getUrl(): string {
        return this.url;
    }


    public getPosition(): PositionType {
        return this.position;
    }

    public getRelationships(): RelationShipType[] {
        return this.relationships;
    }


    public getPermissions(): PermissionType {
        return this.permissions;
    }


    public getConfig(): ProcessorConfigType {
        return this.config;
    }
}