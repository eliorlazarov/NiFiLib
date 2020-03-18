import {PortType} from "../../NiFiObjects/Types/Port/PortType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {Port} from "../../NiFiObjects/Port/Port";


export class PortBuilder implements PortType {
    position: PositionType;
    name: string;
    type: string;
    state: string;

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setType(type: string) {
        this.type = type;
        return this;
    }


    setState(state: string) {
        this.state = state;
        return this;
    }


    build() {
        return new Port(this);
    }
}