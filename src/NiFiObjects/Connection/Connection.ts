import {ConnectionType} from "../Types/Connection/ConnectionType";
import {PositionType} from "../Types/PositionType";
import {ConnectableType} from "../Types/Connection/ConnectableType";
import {ConnectionBuilder} from "../../NiFiObjectBuilder/ConnectionBuilder/ConnectionBuilder";


export class Connection implements ConnectionType {
    id: string;
    name: string;
    position: PositionType;
    source: ConnectableType;
    destination: ConnectableType;
    parentGroupId: string;
    versionComponentId: string;

    constructor(connectionBuilder: ConnectionBuilder) {
        this.id = connectionBuilder.id;
        this.name = connectionBuilder.name;
        this.position = connectionBuilder.position;
        this.source = connectionBuilder.source;
        this.destination = connectionBuilder.destination;
        this.parentGroupId = connectionBuilder.parentGroupId;
        this.versionComponentId = connectionBuilder.versionComponentId;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getSource(): ConnectableType {
        return this.source;
    }

    public getDestination(): ConnectableType {
        return this.destination;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getVersionComponentId(): string {
        return this.versionComponentId;
    }


}