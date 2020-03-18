import {NiFiAPIErrorFactory} from "../errors/nifi/niFiAPIErrorFactory";

const request = require('request-promise');

export class RequestSender {
    protected errorFactory: NiFiAPIErrorFactory;

    constructor(protected nifiUrl: string) {
        this.errorFactory = new NiFiAPIErrorFactory();
    }

    public async sendNifiRequestAndModifyOptions(options: object) {
        try {
            options['json'] = true;
            options['resolveWithFullResponse'] = true;
            options['url'] = this.nifiUrl + options['url'];


            let response = await request(options);
            return response['body'];
        } catch (e) {
            throw this.errorFactory.getNiFiAPIError(e.message);
        }
    }

}
