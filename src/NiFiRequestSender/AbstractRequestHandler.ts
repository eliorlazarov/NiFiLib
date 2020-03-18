import {RequestSender} from "./RequestSender";
import {isNullOrUndefined} from "util";

export class AbstractRequestHandler {
    constructor(protected requestSender: RequestSender) {
    }

    protected async Get(url: string, body?: object): Promise<any> {
        return await this.sendRequest('GET', url, body);
    }

    protected async Post(url: string, body?: object): Promise<any> {
        return await this.sendRequest('POST', url, body);
    }

    protected async Put(url: string, body?: object): Promise<any> {
        return await this.sendRequest('PUT', url, body);
    }

    protected async Delete(url: string, body?: object): Promise<any> {
        return await this.sendRequest('DELETE', url, body);
    }

    private async sendRequest(method, url, body) {
        return await this.requestSender.sendNifiRequestAndModifyOptions(this.initOptions(method, url, body));
    }

    private initOptions(method: string, url: string, body?: object) {
        let options = {
            url: url,
            method: method,
        };

        if (!isNullOrUndefined(body)) {
            options['body'] = body
        }

        return options;
    }

}