import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {ProcessGroupEntity} from "../../../src/NiFiObjects/ProcessGroup/ProcessGroupEntity";
import {ProcessGroupEntityBuilder} from "../../../src/NiFiObjectBuilder/ProcessGroupBuilder/ProcessGroupEntityBuilder";
import {ProcessGroupGenerator} from "./ProcessGroupGenerator";
import {PermissionGenerator} from "../PermissionGenerator";
import {RevisionGenerator} from "../RevisionGenerator";

export class ProcessGroupEntityGenerator implements AbstractObjectGenerator {


    generate(): ProcessGroupEntity {
        let processGroupEntity = new ProcessGroupEntityBuilder();
        processGroupEntity.setBulletins([{}]);
        processGroupEntity.setComponent(new ProcessGroupGenerator().generate());
        processGroupEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        processGroupEntity.setId(GlobalOperations.getRandId());
        processGroupEntity.setPermission(new PermissionGenerator().generate());
        processGroupEntity.setPosition(new PositionGenerator().generate());
        processGroupEntity.setRevision(new RevisionGenerator().generate());
        processGroupEntity.setUri(GlobalOperations.getRandString());
        return processGroupEntity.build();
    }

}