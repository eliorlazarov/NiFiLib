import {ProcessorType} from "../../NiFiObjects/Types/Processor/ProcessorType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {RelationShipType} from "../../NiFiObjects/Types/RelationShipType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {ProcessorConfigType} from "../../NiFiObjects/Types/Processor/ProcessorConfigType";
import {Processor} from "../../NiFiObjects/Processor/Processor";

export class ProcessorBuilder implements ProcessorType {
    revision: RevisionType;
    id: string;
    url: string;
    position: PositionType;
    relationships: RelationShipType[];
    permissions: PermissionType;
    config: ProcessorConfigType;


    setRevision(revision: RevisionType) {
        this.revision = revision;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    setUrl(url: string) {
        this.url = url;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }


    setRelationships(relationships: RelationShipType[]) {
        this.relationships = relationships;
        return this;
    }


    setPermission(permissions: PermissionType) {
        this.permissions = permissions;
        return this;
    }

    setConfig(config: ProcessorConfigType) {
        this.config = config;
        return this;
    }


    build() {
        return new Processor(this);
    }
}