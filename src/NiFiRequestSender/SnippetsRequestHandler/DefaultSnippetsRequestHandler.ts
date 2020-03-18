import {SnippetsRequestHandler} from "./SnippetsRequestHandler";
import {SnippetType} from "../../NiFiObjects/Types/SnippetType";

export class DefaultSnippetsRequestHandler extends SnippetsRequestHandler {

    url = `/snippets`;

    async createSnippet(parentPgId: string, pgId: string, version: number): Promise<SnippetType> {
        let body = {
            "snippet": {
                "parentGroupId": parentPgId,
                "processGroups": {
                    [pgId]: {
                        "version": version
                    }
                }
            }
        };
        let result = await this.Post(this.url, body);
        return result["snippet"] as SnippetType;
    }

    async putSnippet(snippetId: string, newParentPgId: string): Promise<SnippetType> {
        let body = {
            "snippet": {
                "id": snippetId,
                "parentGroupId": newParentPgId
            }
        };
        let result = await this.Put(this.url + `/${snippetId}`, body);
        return result["snippet"] as SnippetType;
    }

}