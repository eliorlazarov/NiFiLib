import {BundleType} from "./ControllerService/BundleType";

export type ReportingTaskType = {
    id : string,
    name: string,
    type: string,
    bundle: BundleType,
    state: string,
    comments:string,
    schedulingPeriod: string,
    schedulingStrategy: string
}