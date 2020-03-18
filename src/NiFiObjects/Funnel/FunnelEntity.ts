import {FunnelType} from "../Types/Funnel/FunnelType";
import {PositionType} from "../Types/PositionType";
import {FunnelEntityType} from "../Types/Funnel/FunnelEntityType";
import {PermissionType} from "../Types/PermissionType";
import {RevisionType} from "../Types/RevisionType";
import {FunnelEntityBuilder} from "../../NiFiObjectBuilder/FunnelBuilder/FunnelEntityBuilder";


export class FunnelEntity implements FunnelEntityType {

    component: FunnelType;
    id: string;
    permissions: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;

    constructor(funnelEntityBuilder: FunnelEntityBuilder) {
        this.component = funnelEntityBuilder.component;
        this.id = funnelEntityBuilder.id;
        this.permissions = funnelEntityBuilder.permissions;
        this.position = funnelEntityBuilder.position;
        this.revision = funnelEntityBuilder.revision;
        this.uri = funnelEntityBuilder.uri;
    }


    public getComponent(): FunnelType {
        return this.component;
    }

    public getId(): string {
        return this.id;
    }

    public getPermissions(): PermissionType {
        return this.permissions;
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