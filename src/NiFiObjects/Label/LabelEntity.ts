import {PositionType} from "../Types/PositionType";
import {LabelType} from "../Types/Label/LabelType";
import {LabelEntityType} from "../Types/Label/LabelEntityType";
import {RevisionType} from "../Types/RevisionType";
import {PermissionType} from "../Types/PermissionType";
import {LabelEntityBuilder} from "../../NiFiObjectBuilder/LabelBuilder/LabelEntityBuilder";


export class LabelEntity implements LabelEntityType {
    bulletins: object[];
    component: LabelType;
    id: string;
    permissions: PermissionType;
    position: PositionType;
    revision: RevisionType;
    uri: string;


    constructor(labelEntityBuilder: LabelEntityBuilder) {
        this.bulletins = labelEntityBuilder.bulletins;
        this.component = labelEntityBuilder.component;
        this.id = labelEntityBuilder.id;
        this.permissions = labelEntityBuilder.permissions;
        this.position = labelEntityBuilder.position;
        this.revision = labelEntityBuilder.revision;
        this.uri = labelEntityBuilder.uri
    }

    public getBulletins(): object[] {
        return this.bulletins;
    }

    public getComponent(): LabelType {
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