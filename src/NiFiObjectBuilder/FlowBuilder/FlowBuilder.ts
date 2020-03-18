import {FlowType} from "../../NiFiObjects/Types/Flow/FlowType";
import {Flow} from "../../NiFiObjects/Flow/Flow";
import {ConnectionEntityType} from "../../NiFiObjects/Types/Connection/ConnectionEntityType";
import {FunnelEntityType} from "../../NiFiObjects/Types/Funnel/FunnelEntityType";
import {PortEntityType} from "../../NiFiObjects/Types/Port/PortEntityType";
import {LabelEntityType} from "../../NiFiObjects/Types/Label/LabelEntityType";
import {ProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupEntityType";
import {ProcessorEntityType} from "../../NiFiObjects/Types/Processor/ProcessorEntityType";
import {RemoteProcessGroupEntityType} from "../../NiFiObjects/Types/ProcessGroup/RemoteProcessGroupEntityType";


export class FlowBuilder implements FlowType {
    connections: ConnectionEntityType[];
    funnels: FunnelEntityType[];
    inputPorts: PortEntityType[];
    labels: LabelEntityType[];
    outputPorts: PortEntityType[];
    processGroups: ProcessGroupEntityType[];
    processors: ProcessorEntityType[];
    remoteProcessGroups: RemoteProcessGroupEntityType[];


    setConnections(connections: ConnectionEntityType[]) {
        this.connections = connections;
        return this;
    }

    setFunnels(funnels: FunnelEntityType[]) {
        this.funnels = funnels;
        return this;
    }

    setInputPorts(inputPorts: PortEntityType[]) {
        this.inputPorts = inputPorts;
        return this;
    }

    setLabels(labels: LabelEntityType[]) {
        this.labels = labels;
        return this;
    }

    setOutputPorts(outputPorts: PortEntityType[]) {
        this.outputPorts = outputPorts;
        return this;
    }

    setProcessGroups(processGroups: ProcessGroupEntityType[]) {
        this.processGroups = processGroups;
        return this;
    }

    setProcessors(processors: ProcessorEntityType[]) {
        this.processors = processors;
        return this;
    }

    setRemoteProcessGroups(remoteProcessGroups: RemoteProcessGroupEntityType[]) {
        this.remoteProcessGroups = remoteProcessGroups;
        return this;
    }


    build() {
        return new Flow(this);
    }


}