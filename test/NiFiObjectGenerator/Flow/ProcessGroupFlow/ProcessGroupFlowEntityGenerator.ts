import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {ProcessGroupFlowEntityBuilder} from "../../../../src/NiFiObjectBuilder/FlowBuilder/ProcessGroupFlowBuilder/ProcessGroupFlowEntityBuilder";
import {ProcessGroupFlowEntity} from "../../../../src/NiFiObjects/Flow/ProcessGroupFlow/ProcessGroupFlowEntity";
import {PermissionGenerator} from "../../PermissionGenerator";
import {ProcessGroupFlowGenerator} from "./ProcessGroupFlowGenerator";


export class ProcessGroupFlowEntityGenerator implements AbstractObjectGenerator {

    generate(): ProcessGroupFlowEntity {
        let processGroupFlowEntity = new ProcessGroupFlowEntityBuilder();
        processGroupFlowEntity.setPermissions(new PermissionGenerator().generate());
        processGroupFlowEntity.setProcessGroupFlow(new ProcessGroupFlowGenerator().generate());
        return processGroupFlowEntity.build();
    };


}