import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {Label} from "../../../src/NiFiObjects/Label/Label";
import {LabelBuilder} from "../../../src/NiFiObjectBuilder/LabelBuilder/LabelBuilder";
import {PositionGenerator} from "../PositionGenerator";

export class LabelGenerator implements AbstractObjectGenerator {

    generate(): Label {
        let label = new LabelBuilder();
        label.setLabel(GlobalOperations.getRandString());
        label.setPosition(new PositionGenerator().generate());
        label.setStyle({});
        label.setParentGroupId(GlobalOperations.getRandString());
        label.setVersionedComponentId(GlobalOperations.getRandString());
        return label.build();
    }


}