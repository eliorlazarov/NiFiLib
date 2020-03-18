import {ControllerServiceStatusType} from "../Types/ControllerService/ControllerServiceStatusType";
import {ControllerServiceStatusBuilder} from "../../NiFiObjectBuilder/ControllerServiceBuilder/ControllerServiceStatusBuilder";

export class ControllerServiceStatus implements ControllerServiceStatusType {

    activeThreadCount: number;
    runStatus: string;
    validationStatus: string;


    constructor(controllerServiceStatusBuilder: ControllerServiceStatusBuilder) {
        this.activeThreadCount = controllerServiceStatusBuilder.activeThreadCount;
        this.runStatus = controllerServiceStatusBuilder.runStatus;
        this.validationStatus = controllerServiceStatusBuilder.validationStatus;

    }

    public getActiveThreadCount(): number {
        return this.activeThreadCount;
    }

    public getRunStatus(): string {
        return this.runStatus;
    }

    public getValidationStatus(): string {
        return this.validationStatus;
    }



}