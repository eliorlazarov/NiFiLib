
import {TemplateType} from "../NiFiObjects/Types/TemplateType";
import {Template} from "../NiFiObjects/Template";


export class TemplateBuilder implements TemplateType {
    uri: string;
    id: string;
    groupId: string;
    name: string;
    description: string;
    timestamp: string;
    encodingVersion: string;

    setId(id: string) {
        this.id = id;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }

    setGroupId(groupId: string) {
        this.groupId = groupId;
        return this;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    setTimestamp(timestamp: string) {
        this.timestamp = timestamp;
        return this;
    }

    setEncodingVersion(encodingVersion: string) {
        this.encodingVersion = encodingVersion;
        return this;
    }

    build() {
        return new Template(this);
    }
}