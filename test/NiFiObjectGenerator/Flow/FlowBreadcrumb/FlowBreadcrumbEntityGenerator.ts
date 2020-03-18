import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {FlowBreadcrumbEntityBuilder} from "../../../../src/NiFiObjectBuilder/FlowBuilder/FlowBreadcrumbBuilder/FlowBreadcrumbEntityBuilder";
import {FlowBreadcrumbEntity} from "../../../../src/NiFiObjects/Flow/FlowBreadcrumb/FlowBreadcrumbEntity";
import {FlowBreadcrumbGenerator} from "./FlowBreadcrumbGenerator";
import {PermissionGenerator} from "../../PermissionGenerator";


export class FlowBreadcrumbEntityGenerator implements AbstractObjectGenerator {

    generate(): FlowBreadcrumbEntity {
        let flowBreadcrumbEntity = new FlowBreadcrumbEntityBuilder();
        flowBreadcrumbEntity.setBreadcrumb(new FlowBreadcrumbGenerator().generate());
        flowBreadcrumbEntity.setId(GlobalOperations.getRandId());
        // recursive problem
        flowBreadcrumbEntity.setParentBreadcrumb({} as FlowBreadcrumbEntity);
        flowBreadcrumbEntity.setPermissions(new PermissionGenerator().generate());
        flowBreadcrumbEntity.setVersionedFlowState(GlobalOperations.getRandString());
        return flowBreadcrumbEntity.build();
    };


}