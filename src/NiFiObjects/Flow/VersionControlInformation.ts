import {VersionControlInformationType} from "../Types/Flow/VersionControlInformationType";
import {VersionControlInformationBuilder} from "../../NiFiObjectBuilder/FlowBuilder/VersionControlInformationBuilder";


export class VersionControlInformation implements VersionControlInformationType {

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

    constructor(versionControlInformationBuilder: VersionControlInformationBuilder) {
        this.bucketId = versionControlInformationBuilder.bucketId;
        this.bucketName = versionControlInformationBuilder.bucketName;
        this.flowDescription = versionControlInformationBuilder.flowDescription;
        this.flowId = versionControlInformationBuilder.flowId;
        this.flowName = versionControlInformationBuilder.flowName;
        this.groupId = versionControlInformationBuilder.groupId;
        this.registryId = versionControlInformationBuilder.registryId;
        this.registryName = versionControlInformationBuilder.registryName;
        this.state = versionControlInformationBuilder.state;
        this.stateExplanation = versionControlInformationBuilder.stateExplanation;
        this.version = versionControlInformationBuilder.version;
    }

    public getBucketId(): string {
        return this.bucketId;
    }

    public getBucketName(): string {
        return this.bucketName;
    }

    public getFlowDescription(): string {
        return this.flowDescription;
    }

    public getFlowId(): string {
        return this.flowId;
    }

    public getFlowName(): string {
        return this.flowName;
    }

    public getRegistryId(): string {
        return this.registryId;
    }

    public getRegistryName(): string {
        return this.registryName;
    }

    public getState(): string {
        return this.state;
    }

    public getStateExplanation(): string {
        return this.stateExplanation;
    }

    public getVersion(): number {
        return this.version;
    }


}