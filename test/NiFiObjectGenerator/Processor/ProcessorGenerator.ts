import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {Processor} from "../../../src/NiFiObjects/Processor/Processor";
import {ProcessorBuilder} from "../../../src/NiFiObjectBuilder/ProcessorBuilder/ProcessorBuilder";
import {RevisionGenerator} from "../RevisionGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {RelationShipGenerator} from "../RelationShipGenerator";
import {ProcessorConfigGenerator} from "./ProcessorConfigGenerator";
import {PermissionGenerator} from "../PermissionGenerator";


export class ProcessorGenerator implements AbstractObjectGenerator {

    generate(): Processor {
        let processor = new ProcessorBuilder();
        processor.setRevision(new RevisionGenerator().generate());
        processor.setId(GlobalOperations.getRandString());
        processor.setUrl(GlobalOperations.getRandString());
        processor.setPosition(new PositionGenerator().generate());
        processor.setRelationships(GlobalOperations.generateAttributes(new RelationShipGenerator()));
        processor.setConfig(new ProcessorConfigGenerator().generate());
        processor.setPermission(new PermissionGenerator().generate());
        return processor.build();
    }


}