import {ProcessGroupType} from "../Types/ProcessGroup/ProcessGroupType";
import {PositionType} from "../Types/PositionType";
import {ProcessGroupBuilder} from "../../NiFiObjectBuilder/ProcessGroupBuilder/ProcessGroupBuilder";
import {FlowSnippetType} from "../Types/Flow/FlowSnippetType";


export class ProcessGroup implements ProcessGroupType {
    position: PositionType;
    name: string;
    variables: object;
    contents: FlowSnippetType;

    constructor(processGroupBuilder: ProcessGroupBuilder) {
        this.position = processGroupBuilder.position;
        this.name = processGroupBuilder.name;
        this.variables = processGroupBuilder.variables;
        this.contents = processGroupBuilder.contents;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getName(): string {
        return this.name;
    }

    public getVariables(): object {
        return this.variables;
    }

    public getContents(): FlowSnippetType {
        return this.contents;
    }
}