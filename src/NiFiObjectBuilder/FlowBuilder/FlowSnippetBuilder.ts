import {ConnectionType} from "../../NiFiObjects/Types/Connection/ConnectionType";
import {ControllerServiceType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceType";
import {FunnelType} from "../../NiFiObjects/Types/Funnel/FunnelType";
import {PortType} from "../../NiFiObjects/Types/Port/PortType";
import {LabelType} from "../../NiFiObjects/Types/Label/LabelType";
import {ProcessGroupType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupType";
import {ProcessorType} from "../../NiFiObjects/Types/Processor/ProcessorType";
import {RemoteProcessGroupType} from "../../NiFiObjects/Types/ProcessGroup/RemoteProcessGroupType";
import {FlowSnippet} from "../../NiFiObjects/Flow/FlowSnippet";
import {FlowSnippetType} from "../../NiFiObjects/Types/Flow/FlowSnippetType";

export class FlowSnippetBuilder implements FlowSnippetType{
    connections: ConnectionType[];
    controllerServices: ControllerServiceType[];
    funnels: FunnelType[];
    inputPorts: PortType[];
    labels: LabelType[];
    outputPorts: PortType[];
    processGroups: ProcessGroupType[];
    processors: ProcessorType[];
    remoteProcessGroups: RemoteProcessGroupType[];


    setConnections(connections: ConnectionType[]) {
        this.connections = connections;
        return this;
    }

    setControllerServices(controllerServices: ControllerServiceType[]) {
        this.controllerServices = controllerServices;
        return this;
    }

    setFunnels(funnels: FunnelType[]) {
        this.funnels = funnels;
        return this;
    }

    setInputPorts(inputPorts: PortType[]) {
        this.inputPorts = inputPorts;
        return this;
    }

    setLabels(labels: LabelType[]) {
        this.labels = labels;
        return this;
    }

    setOutputPorts(outputPorts: PortType[]) {
        this.outputPorts = outputPorts;
        return this;
    }

    setProcessGroups(processGroups: ProcessGroupType[]) {
        this.processGroups = processGroups;
        return this;
    }

    setProcessors(processors: ProcessorType[]) {
        this.processors = processors;
        return this;
    }

    setRemoteProcessGroups(remoteProcessGroups: RemoteProcessGroupType[]) {
        this.remoteProcessGroups = remoteProcessGroups;
        return this;
    }


    build() {
        return new FlowSnippet(this);
    }
}