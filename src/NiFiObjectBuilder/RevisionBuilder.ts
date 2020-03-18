import {RevisionType} from "../NiFiObjects/Types/RevisionType";
import {Revision} from "../NiFiObjects/Revision";


export class RevisionBuilder implements RevisionType {
    clientId: string;
    version: number;
    lastModifier: string;


    setClientId(clientId: string) {
        this.clientId = clientId;
        return this;
    }

    setVersion(version: number) {
        this.version = version;
        return this;
    }

    setLastModifier(lastModifier: string) {
        this.lastModifier= lastModifier;
        return this;
    }

    build() {
        return new Revision(this);
    }
}