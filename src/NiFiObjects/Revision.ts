import {RevisionType} from "./Types/RevisionType";
import {RevisionBuilder} from "../NiFiObjectBuilder/RevisionBuilder";

export class Revision implements RevisionType {
    clientId: string;
    version: number;
    lastModifier: string;

    constructor(revisionBuilder: RevisionBuilder) {
        this.clientId = revisionBuilder.clientId;
        this.version = revisionBuilder.version;
        this.lastModifier = revisionBuilder.lastModifier;


    }

    public getClientId(): string {
        return this.clientId;
    }

    public getVersion(): number {
        return this.version;
    }

    public getLastModifier(): string {
        return this.lastModifier;
    }
}