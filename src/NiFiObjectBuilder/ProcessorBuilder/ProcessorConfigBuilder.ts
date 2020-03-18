import {ProcessorConfigType} from "../../NiFiObjects/Types/Processor/ProcessorConfigType";
import {ProcessorConfig} from "../../NiFiObjects/Processor/ProcessorConfig";


export class ProcessorConfigBuilder implements ProcessorConfigType {
    properties: object;
    descriptors: object;
    schedulingPeriod: string;
    executionMode: string;
    penaltyDuration: string;
    yieldDuration: string;
    bulletinLevel: string;
    runDurationMillis:number;
    concurrentlySchedulableTaskCount:number;

    setProperties(properties: object) {
        this.properties = properties;
        return this;
    }

    setDescriptors(descriptors: object) {
        this.descriptors = descriptors;
        return this;
    }

    setSchedulingPeriod(schedulingPeriod: string) {
        this.schedulingPeriod = schedulingPeriod;
        return this;
    }


    setExecutionMode(executionMode: string) {
        this.executionMode = executionMode;
        return this;
    }


    setPenaltyDuration(penaltyDuration: string) {
        this.penaltyDuration = penaltyDuration;
        return this;
    }

    setYieldDuration(yieldDuration: string) {
        this.yieldDuration = yieldDuration;
        return this;
    }

    setBulletinLevel(bulletinLevel: string) {
        this.bulletinLevel = bulletinLevel;
        return this;
    }

    setRunDurationMillis(runDurationMillis:number){
        this.runDurationMillis = runDurationMillis;
        return this;
    }

    setConcurrentlySchedulableTaskCount(concurrentlySchedulableTaskCount:number){
        this.concurrentlySchedulableTaskCount = concurrentlySchedulableTaskCount
    }


    build() {
        return new ProcessorConfig(this);
    }
}