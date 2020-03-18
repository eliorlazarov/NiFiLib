import {FunnelType} from "../Funnel/FunnelType";
import {LabelType} from "../Label/LabelType";
import {ConnectionType} from "../Connection/ConnectionType";
import {PortType} from "../Port/PortType";
import {ProcessorType} from "../Processor/ProcessorType";
import {RemoteProcessGroupType} from "../ProcessGroup/RemoteProcessGroupType";
import {ProcessGroupType} from "../ProcessGroup/ProcessGroupType";

export type FlowSnippetType = {
    processGroups: ProcessGroupType[];
    remoteProcessGroups: RemoteProcessGroupType[];
    processors: ProcessorType[];
    inputPorts: PortType[];
    outputPorts: PortType[];
    connections: ConnectionType[];
    labels: LabelType[];
    funnels: FunnelType[];
}
