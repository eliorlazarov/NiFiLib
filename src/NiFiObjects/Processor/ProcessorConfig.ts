import {ProcessorConfigType} from "../Types/Processor/ProcessorConfigType";
import {ProcessorConfigBuilder} from "../../NiFiObjectBuilder/ProcessorBuilder/ProcessorConfigBuilder";



export class ProcessorConfig implements ProcessorConfigType {
    properties: object;
    descriptors: object;
    schedulingPeriod: string;
    executionMode: string;
    penaltyDuration: string;
    yieldDuration: string;
    bulletinLevel: string;
    runDurationMillis:number;
    concurrentlySchedulableTaskCount:number;

    constructor(processorConfigBuilder: ProcessorConfigBuilder) {
        this.properties = processorConfigBuilder.properties;
        this.descriptors = processorConfigBuilder.descriptors;
        this.schedulingPeriod = processorConfigBuilder.schedulingPeriod;
        this.executionMode = processorConfigBuilder.executionMode;
        this.penaltyDuration = processorConfigBuilder.penaltyDuration;
        this.yieldDuration = processorConfigBuilder.yieldDuration;
        this.bulletinLevel = processorConfigBuilder.bulletinLevel;
        this.runDurationMillis = processorConfigBuilder.runDurationMillis;
        this.concurrentlySchedulableTaskCount = processorConfigBuilder.concurrentlySchedulableTaskCount
    }

    public getProperties(): object {
        return this.properties;
    }

    public getDescriptors(): object {
        return this.descriptors;
    }

    public getSchedulingPeriod(): string {
        return this.schedulingPeriod;
    }

    public getExecutionMode(): string {
        return this.executionMode;
    }

    public getPenaltyDuration(): string {
        return this.penaltyDuration;
    }

    public getYieldDuration(): string {
        return this.yieldDuration;
    }

    public getBulletinLevel(): string {
        return this.bulletinLevel;
    }

    public getRunDurationMillis(): number {
        return this.runDurationMillis;
    }

    public getConcurrentlySchedulableTaskCount(): number {
        return this.concurrentlySchedulableTaskCount;
    }



}