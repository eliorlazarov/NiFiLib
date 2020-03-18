import {ClusterSummaryType} from "../NiFiObjects/Types/ClusterSummaryType";
import {ClusterSummary} from "../NiFiObjects/ClusterSummary";


export class ClusterSummaryBuilder implements ClusterSummaryType {

    connectedNodeCount: number;
    connectedNodes: string;
    connectedToCluster: boolean;
    totalNodeCount: number;
    clustered: boolean;


    setConnectedNodeCount(connectedNodeCount: number) {
        this.connectedNodeCount = connectedNodeCount;
        return this;
    }

    setConnectedNodes(connectedNodes: string) {
        this.connectedNodes = connectedNodes;
        return this;
    }

    setConnectedToCluster(connectedToCluster: boolean) {
        this.connectedToCluster = connectedToCluster;
        return this;
    }

    setTotalNodeCount(totalNodeCount: number) {
        this.totalNodeCount = totalNodeCount;
        return this;
    }

    setClustered(clustered: boolean) {
        this.clustered = clustered;
        return this;
    }

    build() {
        return new ClusterSummary(this);
    }


}