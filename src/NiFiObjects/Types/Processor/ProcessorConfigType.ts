export type ProcessorConfigType = {
    properties: object;
    descriptors: object;
    schedulingPeriod: string;
    executionMode: string;
    penaltyDuration: string;
    yieldDuration: string;
    bulletinLevel: string;
    runDurationMillis:number;
    concurrentlySchedulableTaskCount:number;
}