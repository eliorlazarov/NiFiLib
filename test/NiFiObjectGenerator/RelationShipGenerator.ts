import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {GlobalOperations} from "../globalOperations";
import {RelationShip} from "../../src/NiFiObjects/RelationShip";
import {RelationShipBuilder} from "../../src/NiFiObjectBuilder/RelationShipBuilder";

export class RelationShipGenerator implements AbstractObjectGenerator {

    generate(): RelationShip {
        let relationShip = new RelationShipBuilder();
        relationShip.setName(GlobalOperations.getRandString());
        relationShip.setDescription(GlobalOperations.getRandString());
        relationShip.setAutoTemplate(GlobalOperations.getRandBoolean());
        return relationShip.build();
    }


}