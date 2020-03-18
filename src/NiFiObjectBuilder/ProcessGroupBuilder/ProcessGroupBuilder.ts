import {ProcessGroupType} from "../../NiFiObjects/Types/ProcessGroup/ProcessGroupType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {ProcessGroup} from "../../NiFiObjects/ProcessGroup/ProcessGroup";
import {FlowSnippetType} from "../../NiFiObjects/Types/Flow/FlowSnippetType";

export class ProcessGroupBuilder implements ProcessGroupType {
    position: PositionType;
    name: string;
    variables: object;
    contents: FlowSnippetType;


    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setVariables(variables: object) {
        this.variables = variables;
        return this;
    }


    setContents(contents: FlowSnippetType) {
        this.contents = contents;
        return this;
    }


    build() {
        return new ProcessGroup(this);
    }
}