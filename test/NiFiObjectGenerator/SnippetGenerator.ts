import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {GlobalOperations} from "../globalOperations";
import {Snippet} from "../../src/NiFiObjects/Snippet";
import {SnippetBuilder} from "../../src/NiFiObjectBuilder/SnippetBuilder";
import {FunnelEntityGenerator} from "./Funnel/FunnelEntityGenerator";
import {LabelEntityGenerator} from "./Label/LabelEntityGenerator";
import {ConnectionEntityGenerator} from "./Connection/ConnectionEntityGenerator";
import {PortEntityGenerator} from "./Port/PortEntityGenerator";
import {ProcessorEntityGenerator} from "./Processor/ProcessorEntityGenerator";
import {RemoteProcessGroupEntityGenerator} from "./ProcessGroup/RemoteProcessGroupEntityGenerator";
import {ProcessGroupEntityGenerator} from "./ProcessGroup/ProcessGroupEntityGenerator";

export class SnippetGenerator implements AbstractObjectGenerator {

    generate(): Snippet {
        let snippet = new SnippetBuilder();
        snippet.setId(GlobalOperations.getRandId());
        snippet.setUri(GlobalOperations.getRandString());
        snippet.setParentGroupId(GlobalOperations.getRandId());
        snippet.setProcessGroups(GlobalOperations.generateAttributes(new ProcessGroupEntityGenerator()));
        snippet.setRemoteProcessGroups(GlobalOperations.generateAttributes(new RemoteProcessGroupEntityGenerator()));
        snippet.setProcessors(GlobalOperations.generateAttributes(new ProcessorEntityGenerator()));
        snippet.setInputPorts(GlobalOperations.generateAttributes(new PortEntityGenerator()));
        snippet.setOutputPorts(GlobalOperations.generateAttributes(new PortEntityGenerator()));
        snippet.setConnections(GlobalOperations.generateAttributes(new ConnectionEntityGenerator()));
        snippet.setLabels(GlobalOperations.generateAttributes(new LabelEntityGenerator()));
        snippet.setFunnels(GlobalOperations.generateAttributes(new FunnelEntityGenerator()));
        return snippet.build();
    }


}