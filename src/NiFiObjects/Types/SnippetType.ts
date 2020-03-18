export type SnippetType = {
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
}