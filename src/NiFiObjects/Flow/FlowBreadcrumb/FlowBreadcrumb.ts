import {FlowBreadcrumbType} from "../../Types/Flow/FlowBreadcrumb/FlowBreadcrumbType";
import {VersionControlInformationType} from "../../Types/Flow/VersionControlInformationType";
import {FlowBreadcrumbBuilder} from "../../../NiFiObjectBuilder/FlowBuilder/FlowBreadcrumbBuilder/FlowBreadcrumbBuilder";


export class FlowBreadcrumb implements FlowBreadcrumbType {
    id: string;
    name: string;
    versionControlInformation: VersionControlInformationType;


    constructor(flowBreadcrumbBuilder: FlowBreadcrumbBuilder) {
        this.id = flowBreadcrumbBuilder.id;
        this.name = flowBreadcrumbBuilder.name;
        this.versionControlInformation = flowBreadcrumbBuilder.versionControlInformation;

    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getVersionControlInformation(): VersionControlInformationType {
        return this.versionControlInformation;
    }


}