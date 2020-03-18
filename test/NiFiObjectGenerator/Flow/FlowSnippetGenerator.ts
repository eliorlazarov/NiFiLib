import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {FlowSnippet} from "../../../src/NiFiObjects/Flow/FlowSnippet";
import {FlowSnippetBuilder} from "../../../src/NiFiObjectBuilder/FlowBuilder/FlowSnippetBuilder";
import {ConnectionGenerator} from "../Connection/ConnectionGenerator";
import {ControllerServiceGenerator} from "../ControllerService/ControllerServiceGenerator";
import {FunnelGenerator} from "../Funnel/FunnelGenerator";
import {PortGenerator} from "../Port/PortGenerator";
import {LabelGenerator} from "../Label/LabelGenerator";
import {ProcessorGenerator} from "../Processor/ProcessorGenerator";
import {RemoteProcessGroupGenerator} from "../ProcessGroup/RemoteProcessGroupGenerator";
import {ProcessGroupType} from "../../../src/NiFiObjects/Types/ProcessGroup/ProcessGroupType";


export class FlowSnippetGenerator implements AbstractObjectGenerator {

    generate(): FlowSnippet {
        let flowSnippet = new FlowSnippetBuilder();
        flowSnippet.setConnections(GlobalOperations.generateAttributes(new ConnectionGenerator()));
        flowSnippet.setControllerServices(GlobalOperations.generateAttributes(new ControllerServiceGenerator()));
        flowSnippet.setFunnels(GlobalOperations.generateAttributes(new FunnelGenerator()));
        flowSnippet.setInputPorts(GlobalOperations.generateAttributes(new PortGenerator()));
        flowSnippet.setLabels(GlobalOperations.generateAttributes(new LabelGenerator()));
        flowSnippet.setOutputPorts(GlobalOperations.generateAttributes(new PortGenerator()));
        // set processGroups to empty array cause to recursive problem
        flowSnippet.setProcessGroups([{} as ProcessGroupType]);
        flowSnippet.setProcessors(GlobalOperations.generateAttributes(new ProcessorGenerator()));
        flowSnippet.setRemoteProcessGroups(GlobalOperations.generateAttributes(new RemoteProcessGroupGenerator()));
        return flowSnippet.build();
    };


}