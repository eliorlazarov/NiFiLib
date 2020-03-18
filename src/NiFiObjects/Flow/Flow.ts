import {FlowType} from "../Types/Flow/FlowType";
import {ConnectionEntityType} from "../Types/Connection/ConnectionEntityType";
import {FunnelEntityType} from "../Types/Funnel/FunnelEntityType";
import {PortEntityType} from "../Types/Port/PortEntityType";
import {LabelEntityType} from "../Types/Label/LabelEntityType";
import {ProcessGroupEntityType} from "../Types/ProcessGroup/ProcessGroupEntityType";
import {ProcessorEntityType} from "../Types/Processor/ProcessorEntityType";
import {RemoteProcessGroupEntityType} from "../Types/ProcessGroup/RemoteProcessGroupEntityType";
import {FlowBuilder} from "../../NiFiObjectBuilder/FlowBuilder/FlowBuilder";


export class Flow implements FlowType {
    connections: ConnectionEntityType[];
    funnels: FunnelEntityType[];
    inputPorts: PortEntityType[];
    labels: LabelEntityType[];
    outputPorts: PortEntityType[];
    processGroups: ProcessGroupEntityType[];
    processors: ProcessorEntityType[];
    remoteProcessGroups: RemoteProcessGroupEntityType[];


    constructor(flowBuilder: FlowBuilder) {
        this.connections = flowBuilder.connections;
        this.funnels = flowBuilder.funnels;
        this.inputPorts = flowBuilder.inputPorts;
        this.labels = flowBuilder.labels;
        this.outputPorts = flowBuilder.outputPorts;
        this.processGroups = flowBuilder.processGroups;
        this.processors = flowBuilder.processors;
        this.remoteProcessGroups = flowBuilder.remoteProcessGroups;
    }

    public getConnections(): ConnectionEntityType[] {
        return this.connections;
    }


    public getFunnels(): FunnelEntityType[] {
        return this.funnels;
    }

    public getInputPorts(): PortEntityType[] {
        return this.inputPorts;
    }

    public getLables(): LabelEntityType[] {
        return this.labels;
    }

    public getOutputPorts(): PortEntityType[] {
        return this.outputPorts;
    }

    public getProcessGroups(): ProcessGroupEntityType[] {
        return this.processGroups;
    }

    public getProcessors(): ProcessorEntityType[] {
        return this.processors;
    }

    public getRemoteProcessGroups(): RemoteProcessGroupEntityType[] {
        return this.remoteProcessGroups;
    }


}