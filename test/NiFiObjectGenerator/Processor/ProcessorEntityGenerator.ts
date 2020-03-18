import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {ProcessorEntity} from "../../../src/NiFiObjects/Processor/ProcessorEntity";
import {ProcessorEntityBuilder} from "../../../src/NiFiObjectBuilder/ProcessorBuilder/ProcessorEntityBuilder";
import {PermissionGenerator} from "../PermissionGenerator";
import {ProcessorGenerator} from "./ProcessorGenerator";
import {RevisionGenerator} from "../RevisionGenerator";
import {PositionGenerator} from "../PositionGenerator";

export class ProcessorEntityGenerator implements AbstractObjectGenerator {

    generate(): ProcessorEntity {
        let processorEntity = new ProcessorEntityBuilder();
        processorEntity.setOperatePermissions(new PermissionGenerator().generate());
        processorEntity.setStatus({});
        processorEntity.setInputRequirements(GlobalOperations.getRandString());
        processorEntity.setComponent(new ProcessorGenerator().generate());
        processorEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        processorEntity.setBulletins([{}]);
        processorEntity.setId(GlobalOperations.getRandId());
        processorEntity.setPermissions(new PermissionGenerator().generate());
        processorEntity.setRevision(new RevisionGenerator().generate());
        processorEntity.setPosition(new PositionGenerator().generate());
        processorEntity.setUri(GlobalOperations.getRandString());
        return processorEntity.build();
    }

}