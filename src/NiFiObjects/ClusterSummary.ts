import {ClusterSummaryType} from "./Types/ClusterSummaryType";
import {ClusterSummaryBuilder} from "../NiFiObjectBuilder/ClusterSummaryBuilder";


export class ClusterSummary implements ClusterSummaryType {

    connectedNodeCount: number;
    connectedNodes: string;
    connectedToCluster: boolean;
    totalNodeCount: number;
    clustered: boolean;

    constructor(clusterSummaryBuilder: ClusterSummaryBuilder) {
        this.connectedNodeCount = clusterSummaryBuilder.connectedNodeCount;
        this.connectedNodes = clusterSummaryBuilder.connectedNodes;
        this.connectedToCluster = clusterSummaryBuilder.connectedToCluster;
        this.totalNodeCount = clusterSummaryBuilder.totalNodeCount;
        this.clustered = clusterSummaryBuilder.clustered;
    }

    public getConnectedNodeCount(): number {
        return this.connectedNodeCount;
    }
    public getConnectedNodes():string {
        return this.connectedNodes;
    }
    public getConnectedToCluster():boolean{
        return this.connectedToCluster
    }
    public getTotalNodeCount(): number {
        return this.totalNodeCount;
    }
    public getClustered(): boolean {
        return this.clustered;
    }






}