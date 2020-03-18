import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {ControllerServiceStatus} from "../../../src/NiFiObjects/ControllerService/ControllerServiceStatus";
import {ControllerServiceStatusBuilder} from "../../../src/NiFiObjectBuilder/ControllerServiceBuilder/ControllerServiceStatusBuilder";


export class ControllerServiceStatusGenerator implements AbstractObjectGenerator {

    generate(): ControllerServiceStatus {
        let controllerServiceStatus = new ControllerServiceStatusBuilder();
        controllerServiceStatus.setRunStatus(GlobalOperations.getRandString());
        controllerServiceStatus.setValidationStatus(GlobalOperations.getRandString());
        controllerServiceStatus.setActiveThreadCount(GlobalOperations.getRandNum());
        return controllerServiceStatus.build();
    };


}