import {ReportingTaskType} from "./Types/ReportingTaskType";
import {BundleType} from "./Types/ControllerService/BundleType";
import {ReportingTaskBuilder} from "../NiFiObjectBuilder/ReportingTaskBuilder";

export class ReportingTask implements ReportingTaskType {
    id: string;
    name: string;
    type: string;
    bundle: BundleType;
    state: string;
    comments: string;
    schedulingPeriod: string;
    schedulingStrategy: string;

    constructor(reportingTaskBuilder: ReportingTaskBuilder) {
        this.id = reportingTaskBuilder.id;
        this.name = reportingTaskBuilder.name;
        this.type = reportingTaskBuilder.type;
        this.bundle = reportingTaskBuilder.bundle;
        this.state = reportingTaskBuilder.state;
        this.comments = reportingTaskBuilder.comments;
        this.schedulingPeriod = reportingTaskBuilder.schedulingPeriod;
        this.schedulingStrategy = reportingTaskBuilder.schedulingStrategy;

    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

    public getBundle(): BundleType {
        return this.bundle;
    }

    public getState(): string {
        return this.state;
    }

    public getComments(): string {
        return this.comments;
    }

    public getSchedulingPeriod(): string {
        return this.schedulingPeriod;
    }

    public getSchedulingStrategy(): string {
        return this.schedulingStrategy;
    }
}