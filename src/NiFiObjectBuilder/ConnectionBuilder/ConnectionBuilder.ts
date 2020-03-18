import {ConnectionType} from "../../NiFiObjects/Types/Connection/ConnectionType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {ConnectableType} from "../../NiFiObjects/Types/Connection/ConnectableType";
import {Connection} from "../../NiFiObjects/Connection/Connection";

export class ConnectionBuilder implements ConnectionType {
    id: string;
    name: string;
    position: PositionType;
    source: ConnectableType;
    destination: ConnectableType;
    parentGroupId: string;
    versionComponentId: string;

    setId(id: string) {
        this.id = id;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setSource(source: ConnectableType) {
        this.source = source;
        return this;
    }


    setDestination(destination: ConnectableType) {
        this.destination = destination;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId = parentGroupId;
        return this;
    }

    setVersionComponentId(versionComponentId: string) {
        this.versionComponentId = versionComponentId;
        return this;
    }

    build() {
        return new Connection(this);
    }


}