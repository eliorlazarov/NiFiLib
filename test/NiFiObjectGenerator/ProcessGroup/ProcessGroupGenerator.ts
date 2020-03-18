import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {ProcessGroup} from "../../../src/NiFiObjects/ProcessGroup/ProcessGroup";
import {ProcessGroupBuilder} from "../../../src/NiFiObjectBuilder/ProcessGroupBuilder/ProcessGroupBuilder";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {FlowSnippetGenerator} from "../Flow/FlowSnippetGenerator";

export class ProcessGroupGenerator implements AbstractObjectGenerator {


    generate(): ProcessGroup {
        let processGroup = new ProcessGroupBuilder();
        processGroup.setName(GlobalOperations.getRandString());
        processGroup.setPosition(new PositionGenerator().generate());
        processGroup.setVariables({});
        processGroup.setContents(new FlowSnippetGenerator().generate());
        return processGroup.build();
    }

}