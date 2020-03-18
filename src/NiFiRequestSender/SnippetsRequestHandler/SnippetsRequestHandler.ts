import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {SnippetType} from "../../NiFiObjects/Types/SnippetType";

export abstract class SnippetsRequestHandler extends AbstractRequestHandler {
    public abstract async createSnippet(parentPgId: string, pgId: string, version: number): Promise<SnippetType>

    public abstract async putSnippet(snippetId: string, newParentPgId: string): Promise<SnippetType>
}