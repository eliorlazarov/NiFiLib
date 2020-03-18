import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {GlobalOperations} from "../globalOperations";
import {ReportingTaskBuilder} from "../../src/NiFiObjectBuilder/ReportingTaskBuilder";
import {ReportingTask} from "../../src/NiFiObjects/ReportingTask";
import {BundleGenerator} from "./BundleGenerator";

export class ReportingTaskGenerator implements AbstractObjectGenerator {

    generate(): ReportingTask {
        let reportingTask = new ReportingTaskBuilder();
        reportingTask.setId(GlobalOperations.getRandId());
        reportingTask.setName(GlobalOperations.getRandString());
        reportingTask.setType(GlobalOperations.getRandString());
        reportingTask.setBundle(new BundleGenerator().generate());
        reportingTask.setState(GlobalOperations.getRandString());
        reportingTask.setComments(GlobalOperations.getRandString());
        reportingTask.setSchedulingStrategy(GlobalOperations.getRandString());
        reportingTask.setSchedulingPeriod(GlobalOperations.getRandString());
        return reportingTask.build();
    }


}