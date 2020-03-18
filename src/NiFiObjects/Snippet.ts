import {SnippetType} from "./Types/SnippetType";
import {SnippetBuilder} from "../NiFiObjectBuilder/SnippetBuilder";


export class Snippet implements SnippetType {
    id: string;
    uri: string;
    parentGroupId: string;
    processGroups: object;
    remoteProcessGroups: object;
    processors: object;
    inputPorts: object;
    outputPorts: object;
    connections: object;
    labels: object;
    funnels: object;

    constructor(snippetBuilder: SnippetBuilder) {
        this.id = snippetBuilder.id;
        this.uri = snippetBuilder.uri;
        this.parentGroupId = snippetBuilder.parentGroupId;
        this.processGroups = snippetBuilder.processGroups;
        this.remoteProcessGroups = snippetBuilder.remoteProcessGroups;
        this.processors = snippetBuilder.processors;
        this.inputPorts = snippetBuilder.inputPorts;
        this.outputPorts = snippetBuilder.outputPorts;
        this.connections = snippetBuilder.connections;
        this.labels = snippetBuilder.labels;
        this.funnels = snippetBuilder.funnels;
    }

    public getId(): string {
        return this.id;
    }

    public getUri(): string {
        return this.uri;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getProcessGroups(): object {
        return this.processGroups;
    }

    public getRemoteProcessGroups(): object {
        return this.remoteProcessGroups;
    }

    public getProcessors(): object {
        return this.processors;
    }

    public getInputPorts(): object {
        return this.inputPorts;
    }

    public getOutputPorts(): object {
        return this.outputPorts;
    }

    public getConnections(): object {
        return this.connections;
    }

    public getLabels(): object {
        return this.labels;
    }

    public getFunnels(): object {
        return this.funnels;
    }

}