import {ProcessorType} from "../../NiFiObjects/Types/Processor/ProcessorType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {PermissionType} from "../../NiFiObjects/Types/PermissionType";
import {ProcessorEntity} from "../../NiFiObjects/Processor/ProcessorEntity";


export class ProcessorEntityBuilder implements ProcessorEntityBuilder {
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


    setRevision(revision: RevisionType) {
        this.revision = revision;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }


    setPermissions(permissions: PermissionType) {
        this.permissions = permissions;
        return this;
    }


    setBulletins(bulletins: object[]) {
        this.bulletins = bulletins;
        return this;
    }

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged: boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this;
    }


    setComponent(component: ProcessorType) {
        this.component = component;
        return this;
    }

    setInputRequirements(inputRequirements: string) {
        this.inputRequirements = inputRequirements;
        return this;
    }

    setStatus(status: object) {
        this.status = status;
        return this;
    }

    setOperatePermissions(operatePermissions: PermissionType) {
        this.operatePermissions = operatePermissions;
        return this;
    }


    build() {
        return new ProcessorEntity(this);
    }
}