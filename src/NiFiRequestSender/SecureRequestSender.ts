import {RequestSender} from "./RequestSender";

const request = require('request-promise');

export class SecureRequestSender extends RequestSender {

    protected authHeader;
    protected token: string;

    constructor(protected NifiUrl: string, protected username, protected password) {
        super(NifiUrl);
        this.authHeader = 'Bearer';
    }

    public async sendNifiRequestAndModifyOptions(options: object) {
        options['insecure'] = true;
        options['rejectUnauthorized'] = false;
        if (!options['headers']) {
            options['headers'] = {}
        }
        options['headers']['Authorization'] = this.authHeader;

        try {
            return await super.sendNifiRequestAndModifyOptions(options);
        } catch (e) {
            if (e.statusCode === 401) {
                this.token = await this.login(this.username, this.password);
                options['headers']['Authorization'] = this.authHeader;
                return await super.sendNifiRequestAndModifyOptions(options);
            } else {
                throw e;
            }
        }
    }

    protected async login(username: string, password: string): Promise<any> {
        let options = {
            uri: `${this.nifiUrl}/access/token/login`,
            method: 'POST',
            headers: {
                Authorization: 'Basic ' +
                    Buffer.from(username + ':' + password).toString('base64')
            },
            json: false,
            insecure: true,
            rejectUnauthorized: false,
            timeout: 60000
        };

        let answer;
        try {
            answer = await request(options);
        } catch (e) {
            console.log(e);
        }
        return answer;
    }

}


