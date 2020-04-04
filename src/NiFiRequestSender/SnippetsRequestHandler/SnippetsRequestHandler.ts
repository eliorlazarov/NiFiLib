import {ISnippetsRequestHandler} from "./ISnippetsRequestHandler";
import {SnippetType} from "../../NiFiObjects/Types/SnippetType";
import { AbstractRequestHandler } from "../AbstractRequestHandler";

export class SnippetsRequestHandler extends AbstractRequestHandler implements ISnippetsRequestHandler {

    url = `/snippets`;

    async createSnippet(snippet: SnippetType): Promise<SnippetType> {
        let body = {
            "snippet": snippet
        };
        let result = await this.Post(this.url, body);
        return result["snippet"] as SnippetType;
    }

    async putSnippet(snippetId: string,snippet: SnippetType): Promise<SnippetType> {
        let body = {
            "snippet": snippet
        };
        let result = await this.Put(this.url + `/${snippetId}`, body);
        return result["snippet"] as SnippetType;
    }

}