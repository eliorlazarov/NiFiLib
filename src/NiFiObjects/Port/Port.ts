import {PortType} from "../Types/Port/PortType";
import {PositionType} from "../Types/PositionType";
import {PortBuilder} from "../../NiFiObjectBuilder/PortBuilder/PortBuilder";


export class Port implements PortType {
    position: PositionType;
    name: string;
    type: string;
    state: string;

    constructor(portBuilder: PortBuilder) {
        this.position = portBuilder.position;
        this.name = portBuilder.name;
        this.type = portBuilder.type;
        this.state = portBuilder.state;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

    public getState(): string {
        return this.state;
    }
}