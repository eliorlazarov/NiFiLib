import {ConnectableType} from "../Types/Connection/ConnectableType";
import {ConnectableBuilder} from "../../NiFiObjectBuilder/ConnectionBuilder/ConnectableBuilder";

export class Connectable implements ConnectableType {
    id: string;
    type: string;
    name: string;
    groupId: string;
    versionComponentId: string;


    constructor(connectableBuilder: ConnectableBuilder) {
        this.id = connectableBuilder.id;
        this.type = connectableBuilder.type;
        this.name = connectableBuilder.name;
        this.groupId = connectableBuilder.groupId;
        this.versionComponentId = connectableBuilder.versionComponentId;

    }

    public getId(): string {
        return this.id;
    }

    public getType(): string {
        return this.type;
    }

    public getName(): string {
        return this.name;
    }

    public getGroupId(): string {
        return this.groupId;
    }

    public getVersionComponentId(): string {
        return this.versionComponentId;
    }


}