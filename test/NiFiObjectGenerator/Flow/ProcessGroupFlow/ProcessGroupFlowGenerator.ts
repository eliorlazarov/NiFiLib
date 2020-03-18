import {ProcessGroupFlow} from "../../../../src/NiFiObjects/Flow/ProcessGroupFlow/ProcessGroupFlow";
import {ProcessGroupFlowBuilder} from "../../../../src/NiFiObjectBuilder/FlowBuilder/ProcessGroupFlowBuilder/ProcessGroupFlowBuilder";
import {FlowBreadcrumbEntityGenerator} from "../FlowBreadcrumb/FlowBreadcrumbEntityGenerator";
import {FlowGenerator} from "../FlowGenerator";
import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";


export class ProcessGroupFlowGenerator implements AbstractObjectGenerator {

    generate(): ProcessGroupFlow {
        let processGroupFlow = new ProcessGroupFlowBuilder();
        processGroupFlow.setBreadcrumb(new FlowBreadcrumbEntityGenerator().generate());
        processGroupFlow.setFlow(new FlowGenerator().generate());
        processGroupFlow.setId(GlobalOperations.getRandId());
        processGroupFlow.setLastRefreshed(GlobalOperations.getRandString());
        processGroupFlow.setParentGroupId(GlobalOperations.getRandId());
        processGroupFlow.setUri(GlobalOperations.getRandString());
        return processGroupFlow.build();
    };


}