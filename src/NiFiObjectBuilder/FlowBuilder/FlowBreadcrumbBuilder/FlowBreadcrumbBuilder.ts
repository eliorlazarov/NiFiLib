import {FlowBreadcrumbType} from "../../../NiFiObjects/Types/Flow/FlowBreadcrumb/FlowBreadcrumbType";
import {VersionControlInformationType} from "../../../NiFiObjects/Types/Flow/VersionControlInformationType";
import {FlowBreadcrumb} from "../../../NiFiObjects/Flow/FlowBreadcrumb/FlowBreadcrumb";


export class FlowBreadcrumbBuilder implements FlowBreadcrumbType {
    id: string;
    name: string;
    versionControlInformation: VersionControlInformationType;


    setId(id: string) {
        this.id = id;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setVersionControlInformation(versionControlInformation: VersionControlInformationType) {
        this.versionControlInformation = versionControlInformation;
        return this;
    }

    build() {
        return new FlowBreadcrumb(this);
    }


}