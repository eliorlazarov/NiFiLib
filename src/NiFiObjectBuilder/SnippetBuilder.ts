import {SnippetType} from "../NiFiObjects/Types/SnippetType";
import {Snippet} from "../NiFiObjects/Snippet";


export class SnippetBuilder implements SnippetType{
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

    setId(id: string) {
        this.id = id;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId = parentGroupId;
        return this;
    }

    setProcessGroups(processGroups: object) {
        this.processGroups = processGroups;
        return this;
    }

    setRemoteProcessGroups(remoteProcessGroups: object) {
        this.remoteProcessGroups= remoteProcessGroups;
        return this;
    }

    setProcessors(processors: object) {
        this.processors = processors;
        return this;
    }

    setInputPorts(inputPorts: object) {
        this.inputPorts = inputPorts;
        return this;
    }

    setOutputPorts(outputPorts: object) {
        this.outputPorts = outputPorts;
        return this;
    }

    setConnections(connections: object) {
        this.connections = connections;
        return this;
    }

    setLabels(labels: object) {
        this.labels = labels;
        return this;
    }

    setFunnels(funnels: object) {
        this.funnels = funnels;
        return this;
    }

    build() {
        return new Snippet(this);
    }
}