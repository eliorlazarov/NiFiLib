import {ControllerServiceStatusType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceStatusType";
import {ControllerServiceStatus} from "../../NiFiObjects/ControllerService/ControllerServiceStatus";

export class ControllerServiceStatusBuilder implements ControllerServiceStatusType {

    activeThreadCount: number;
    runStatus: string;
    validationStatus: string;

    setActiveThreadCount(activeThreadCount: number) {
        this.activeThreadCount = activeThreadCount;
        return this;
    }

    setRunStatus(runStatus: string) {
        this.runStatus = runStatus;
        return this;
    }

    setValidationStatus(validationStatus: string) {
        this.validationStatus = validationStatus;
        return this;
    }

    build() {
        return new ControllerServiceStatus(this);
    }


}