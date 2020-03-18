import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {Funnel} from "../../../src/NiFiObjects/Funnel/Funnel";
import {FunnelBuilder} from "../../../src/NiFiObjectBuilder/FunnelBuilder/FunnelBuilder";


export class FunnelGenerator implements AbstractObjectGenerator {

    generate(): Funnel {
        let funnel = new FunnelBuilder();
        funnel.setId(GlobalOperations.getRandId());
        funnel.setPosition(new PositionGenerator().generate());
        funnel.setParentGroupId(GlobalOperations.getRandString());
        funnel.setVersionedComponentId(GlobalOperations.getRandString());
        return funnel.build();
    };


}