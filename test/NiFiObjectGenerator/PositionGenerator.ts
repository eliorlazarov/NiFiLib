import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {PositionBuilder} from "../../src/NiFiObjectBuilder/PositionBuilder";
import {Position} from "../../src/NiFiObjects/Position";
import {GlobalOperations} from "../globalOperations";

export class PositionGenerator implements AbstractObjectGenerator {

    generate(): Position {
        let position = new PositionBuilder();
        position.setX(GlobalOperations.getRandNum());
        position.setY(GlobalOperations.getRandNum());
        return position.build();
    }


}