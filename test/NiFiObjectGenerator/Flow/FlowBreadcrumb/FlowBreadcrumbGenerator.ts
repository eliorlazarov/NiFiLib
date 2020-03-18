import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {FlowBreadcrumb} from "../../../../src/NiFiObjects/Flow/FlowBreadcrumb/FlowBreadcrumb";
import {FlowBreadcrumbBuilder} from "../../../../src/NiFiObjectBuilder/FlowBuilder/FlowBreadcrumbBuilder/FlowBreadcrumbBuilder";
import {GlobalOperations} from "../../../globalOperations";
import {VersionControlInformationGenerator} from "../VersionControlInformationGenerator";


export class FlowBreadcrumbGenerator implements AbstractObjectGenerator {

    generate(): FlowBreadcrumb {
        let flowBreadcrumb = new FlowBreadcrumbBuilder();
        flowBreadcrumb.setId(GlobalOperations.getRandId());
        flowBreadcrumb.setName(GlobalOperations.getRandString());
        flowBreadcrumb.setVersionControlInformation(new VersionControlInformationGenerator().generate());
        return flowBreadcrumb.build();
    };


}