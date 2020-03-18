import {VersionControlInformationType} from "../../NiFiObjects/Types/Flow/VersionControlInformationType";
import {VersionControlInformation} from "../../NiFiObjects/Flow/VersionControlInformation";

export class VersionControlInformationBuilder implements VersionControlInformationType {

    bucketId: string;
    bucketName: string;
    flowDescription: string;
    flowId: string;
    flowName: string;
    groupId: string;
    registryId: string;
    registryName: string;
    state: string;
    stateExplanation: string;
    version: number;


    setBucketId(bucketId: string) {
        this.bucketId = bucketId;
        return this;
    }

    setBucketName(bucketName: string) {
        this.bucketName = bucketName;
        return this;
    }

    setFlowDescription(flowDescription: string) {
        this.flowDescription = flowDescription;
        return this;
    }

    setFlowId(flowId: string) {
        this.flowId = flowId;
        return this;
    }

    setFlowName(flowName: string) {
        this.flowName = flowName;
        return this;
    }

    setGroupId(groupId: string) {
        this.groupId = groupId;
        return this;
    }

    setRegistryId(registryId: string) {
        this.registryId = registryId;
        return this;
    }

    setRegistryName(registryName: string) {
        this.registryName = registryName;
        return this;
    }

    setState(state: string) {
        this.state = state;
        return this;
    }

    setStateExplanation(stateExplanation: string) {
        this.stateExplanation = stateExplanation;
        return this;
    }

    setVersion(version: number) {
        this.version = version;
        return this;
    }


    build() {
        return new VersionControlInformation(this);
    }


}