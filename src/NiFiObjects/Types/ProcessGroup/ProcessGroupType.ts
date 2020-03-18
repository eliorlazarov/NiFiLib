import {PositionType} from "../PositionType";
import {FlowSnippetType} from "../Flow/FlowSnippetType";

export type ProcessGroupType = {
    position: PositionType;
    name: string;
    variables: object;
    contents: FlowSnippetType;
}