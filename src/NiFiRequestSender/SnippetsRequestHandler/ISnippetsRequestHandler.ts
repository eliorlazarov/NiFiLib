import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {SnippetType} from "../../NiFiObjects/Types/SnippetType";

export interface ISnippetsRequestHandler extends AbstractRequestHandler {
    createSnippet(snippet: SnippetType): Promise<SnippetType>

    putSnippet(snippetId: string, snippet: SnippetType): Promise<SnippetType>
}