import {RegistryType} from "../Types/Registry/RegistryType";
import {RegistryClientEntityType} from "../Types/Registry/RegistryClientEntityType";
import {PermissionType} from "../Types/PermissionType";
import {RevisionType} from "../Types/RevisionType";
import {PositionType} from "../Types/PositionType";
import {RegistryClientEntityBuilder} from "../../NiFiObjectBuilder/RegistryBuilder/RegistryClientEntityBuilder";

export class RegistryClientEntity implements RegistryClientEntityType {
    revision: RevisionType;
    id: string;
    uri: string;
    position: PositionType;
    permission: PermissionType;
    bulletins: object[];
    disconnectedNodeAcknowledged: boolean;
    component: RegistryType;


    constructor(registryClientEntityBuilder: RegistryClientEntityBuilder) {
        this.revision = registryClientEntityBuilder.revision;
        this.id = registryClientEntityBuilder.id;
        this.uri = registryClientEntityBuilder.uri;
        this.position = registryClientEntityBuilder.position;
        this.permission = registryClientEntityBuilder.permission;
        this.bulletins = registryClientEntityBuilder.bulletins;
        this.disconnectedNodeAcknowledged = registryClientEntityBuilder.disconnectedNodeAcknowledged;
        this.component = registryClientEntityBuilder.component;

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

    public getPermission(): PermissionType {
        return this.permission;
    }

    public getBulletins(): object[] {
        return this.bulletins;
    }

    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged;
    }

    public getComponent(): RegistryType {
        return this.component;
    }
}