import {ProcessGroupEntityType} from "../ProcessGroup/ProcessGroupEntityType";
import {RemoteProcessGroupEntityType} from "../ProcessGroup/RemoteProcessGroupEntityType";
import {ProcessorEntityType} from "../Processor/ProcessorEntityType";
import {PortEntityType} from "../Port/PortEntityType";
import {ConnectionEntityType} from "../Connection/ConnectionEntityType";
import {LabelEntityType} from "../Label/LabelEntityType";
import {FunnelEntityType} from "../Funnel/FunnelEntityType";

export type FlowType = {
    processGroups: ProcessGroupEntityType[];
    remoteProcessGroups: RemoteProcessGroupEntityType[];
    processors: ProcessorEntityType[];
    inputPorts: PortEntityType[];
    outputPorts: PortEntityType[];
    connections: ConnectionEntityType[];
    labels: LabelEntityType[];
    funnels: FunnelEntityType[];

}