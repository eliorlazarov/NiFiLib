import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {Flow} from "../../../src/NiFiObjects/Flow/Flow";
import {FlowBuilder} from "../../../src/NiFiObjectBuilder/FlowBuilder/FlowBuilder";
import {FunnelEntityGenerator} from "../Funnel/FunnelEntityGenerator";
import {PortEntityGenerator} from "../Port/PortEntityGenerator";
import {LabelEntityGenerator} from "../Label/LabelEntityGenerator";
import {ProcessGroupEntityGenerator} from "../ProcessGroup/ProcessGroupEntityGenerator";
import {RemoteProcessGroupGenerator} from "../ProcessGroup/RemoteProcessGroupGenerator";
import {ProcessorEntityGenerator} from "../Processor/ProcessorEntityGenerator";
import {ConnectionEntityGenerator} from "../Connection/ConnectionEntityGenerator";


export class FlowGenerator implements AbstractObjectGenerator {

    generate(): Flow {
        let flow = new FlowBuilder();
        flow.setConnections(GlobalOperations.generateAttributes(new ConnectionEntityGenerator()));
        flow.setFunnels(GlobalOperations.generateAttributes(new FunnelEntityGenerator()));
        flow.setInputPorts(GlobalOperations.generateAttributes(new PortEntityGenerator()));
        flow.setLabels(GlobalOperations.generateAttributes(new LabelEntityGenerator()));
        flow.setOutputPorts(GlobalOperations.generateAttributes(new PortEntityGenerator()));
        flow.setProcessGroups(GlobalOperations.generateAttributes(new ProcessGroupEntityGenerator()));
        flow.setProcessors(GlobalOperations.generateAttributes(new ProcessorEntityGenerator()));
        flow.setRemoteProcessGroups(GlobalOperations.generateAttributes(new RemoteProcessGroupGenerator()));
        return flow.build();
    };


}