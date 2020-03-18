import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {ControllerService} from "../../../src/NiFiObjects/ControllerService/ControllerService";
import {ControllerServiceBuilder} from "../../../src/NiFiObjectBuilder/ControllerServiceBuilder/ControllerServiceBuilder";
import {BundleGenerator} from "../BundleGenerator";


export class ControllerServiceGenerator implements AbstractObjectGenerator {


    generate(): ControllerService {
        let controllerService = new ControllerServiceBuilder();
        controllerService.setId(GlobalOperations.getRandId());
        controllerService.setName(GlobalOperations.getRandString());
        controllerService.setType(GlobalOperations.getRandString());
        controllerService.setState(GlobalOperations.getRandString());
        controllerService.setProperties({});
        controllerService.setDescriptors({});
        controllerService.setValidationErrors(this.generateVaildationErrors());
        controllerService.setBundle(new BundleGenerator().generate());
        return controllerService.build();
    };

    private generateVaildationErrors(): string[] {
        let validationErrors = [];
        let validationErrorsCount: number = GlobalOperations.getRandNum();
        for (let index = 0; index < validationErrorsCount; index++) {
            validationErrors.push(GlobalOperations.getRandString());
        }
        return validationErrors;
    }


}