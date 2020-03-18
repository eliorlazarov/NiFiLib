import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {GlobalOperations} from "../globalOperations";
import {ClusterSummary} from "../../src/NiFiObjects/ClusterSummary";
import {ClusterSummaryBuilder} from "../../src/NiFiObjectBuilder/ClusterSummaryBuilder";


export class ClusterSummaryGenerator implements AbstractObjectGenerator {


    generate(): ClusterSummary {
        let clusterSummary = new ClusterSummaryBuilder();
        clusterSummary.setClustered(GlobalOperations.getRandBoolean());
        clusterSummary.setConnectedNodeCount(GlobalOperations.getRandNum());
        clusterSummary.setConnectedNodes(GlobalOperations.getRandString());
        clusterSummary.setConnectedToCluster(GlobalOperations.getRandBoolean());
        clusterSummary.setTotalNodeCount(GlobalOperations.getRandNum());
        return clusterSummary.build();
    };


}