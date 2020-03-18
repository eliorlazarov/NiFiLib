import {ReportingTaskType} from "../NiFiObjects/Types/ReportingTaskType";
import {BundleType} from "../NiFiObjects/Types/ControllerService/BundleType";
import {ReportingTask} from "../NiFiObjects/ReportingTask";

export class ReportingTaskBuilder implements ReportingTaskType {
    id: string;
    name: string;
    type: string;
    bundle: BundleType;
    state: string;
    comments: string;
    schedulingPeriod: string;
    schedulingStrategy: string;

    setId(id: string) {
        this.id = id;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setType(type: string) {
        this.type = type;
        return this;
    }

    setBundle(bundle: BundleType) {
        this.bundle = bundle;
        return this;
    }

    setState(state: string) {
        this.state = state;
        return this;
    }

    setComments(comments: string) {
        this.comments = comments;
        return this;
    }

    setSchedulingPeriod(schedulingPeriod: string) {
        this.schedulingPeriod = schedulingPeriod;
        return this;
    }

    setSchedulingStrategy(schedulingStrategy: string) {
        this.schedulingStrategy = schedulingStrategy;
        return this;
    }

    build() {
        return new ReportingTask(this);
    }
}