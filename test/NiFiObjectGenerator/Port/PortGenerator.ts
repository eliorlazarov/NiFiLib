import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {Port} from "../../../src/NiFiObjects/Port/Port";
import {PortBuilder} from "../../../src/NiFiObjectBuilder/PortBuilder/PortBuilder";

export class PortGenerator implements AbstractObjectGenerator {

    generate(): Port {
        let port = new PortBuilder();
        port.setName(GlobalOperations.getRandString());
        port.setState(GlobalOperations.getRandString());
        port.setType(GlobalOperations.getRandString());
        port.setPosition(new PositionGenerator().generate());
        return port.build();
    }


}