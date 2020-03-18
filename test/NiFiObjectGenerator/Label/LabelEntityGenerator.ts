import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {LabelEntityBuilder} from "../../../src/NiFiObjectBuilder/LabelBuilder/LabelEntityBuilder";
import {LabelEntity} from "../../../src/NiFiObjects/Label/LabelEntity";
import {PermissionGenerator} from "../PermissionGenerator";
import {RevisionGenerator} from "../RevisionGenerator";
import {LabelGenerator} from "./LabelGenerator";

export class LabelEntityGenerator implements AbstractObjectGenerator {

    generate(): LabelEntity {
        let labelEntity = new LabelEntityBuilder();
        labelEntity.setComponent(new LabelGenerator().generate());
        labelEntity.setId(GlobalOperations.getRandId());
        labelEntity.setPermissions(new PermissionGenerator().generate());
        labelEntity.setPosition(new PositionGenerator().generate());
        labelEntity.setRevision(new RevisionGenerator().generate());
        labelEntity.setUri(GlobalOperations.getRandString());
        labelEntity.setBulletins([{}]);
        return labelEntity.build();
    }


}