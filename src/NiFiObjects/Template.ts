import {TemplateType} from "./Types/TemplateType";
import {TemplateBuilder} from "../NiFiObjectBuilder/TemplateBuilder";

export class Template implements TemplateType {
    uri: string;
    id: string;
    groupId: string;
    name: string;
    description: string;
    timestamp: string;
    encodingVersion: string;

    constructor(templateBuilder: TemplateBuilder) {
        this.id = templateBuilder.id;
        this.name = templateBuilder.name;
        this.uri = templateBuilder.uri;
        this.groupId = templateBuilder.groupId;
        this.description = templateBuilder.description;
        this.timestamp = templateBuilder.timestamp;
        this.encodingVersion = templateBuilder.encodingVersion;


    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getUri(): string {
        return this.uri;
    }

    public getGroupId(): string {
        return this.groupId;
    }

    public getDescription(): string {
        return this.description;
    }

    public getTimestamp(): string {
        return this.timestamp;
    }

    public getEncodingVersion(): string {
        return this.encodingVersion;
    }
}