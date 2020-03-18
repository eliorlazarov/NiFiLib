import {ConnectionType} from "../Types/Connection/ConnectionType";
import {ControllerServiceType} from "../Types/ControllerService/ControllerServiceType";
import {FunnelType} from "../Types/Funnel/FunnelType";
import {PortType} from "../Types/Port/PortType";
import {LabelType} from "../Types/Label/LabelType";
import {ProcessGroupType} from "../Types/ProcessGroup/ProcessGroupType";
import {ProcessorType} from "../Types/Processor/ProcessorType";
import {RemoteProcessGroupType} from "../Types/ProcessGroup/RemoteProcessGroupType";
import {FlowSnippetBuilder} from "../../NiFiObjectBuilder/FlowBuilder/FlowSnippetBuilder";
import {FlowSnippetType} from "../Types/Flow/FlowSnippetType";


export class FlowSnippet implements FlowSnippetType {
    connections: ConnectionType[];
    controllerServices: ControllerServiceType[];
    funnels: FunnelType[];
    inputPorts: PortType[];
    labels: LabelType[];
    outputPorts: PortType[];
    processGroups: ProcessGroupType[];
    processors: ProcessorType[];
    remoteProcessGroups: RemoteProcessGroupType[];

    constructor(flowSnippetBuilder: FlowSnippetBuilder) {
        this.connections = flowSnippetBuilder.connections;
        this.controllerServices = flowSnippetBuilder.controllerServices;
        this.funnels = flowSnippetBuilder.funnels;
        this.inputPorts = flowSnippetBuilder.inputPorts;
        this.labels = flowSnippetBuilder.labels;
        this.outputPorts = flowSnippetBuilder.outputPorts;
        this.processGroups = flowSnippetBuilder.processGroups;
        this.processors = flowSnippetBuilder.processors;
        this.remoteProcessGroups = flowSnippetBuilder.remoteProcessGroups;
    }

    public getConnections(): ConnectionType[] {
        return this.connections;
    }

    public getControllerServices(): ControllerServiceType[] {
        return this.controllerServices;
    }

    public getFunnels(): FunnelType[] {
        return this.funnels;
    }

    public getInputPorts(): PortType[] {
        return this.inputPorts;
    }

    public getLables(): LabelType[] {
        return this.labels;
    }

    public getOutputPorts(): PortType[] {
        return this.outputPorts;
    }

    public getProcessGroups(): ProcessGroupType[] {
        return this.processGroups;
    }

    public getProcessors(): ProcessorType[] {
        return this.processors;
    }

    public getRemoteProcessGroups(): RemoteProcessGroupType[] {
        return this.remoteProcessGroups;
    }


}