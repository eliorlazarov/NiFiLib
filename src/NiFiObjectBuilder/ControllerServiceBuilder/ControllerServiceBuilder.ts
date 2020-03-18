import {ControllerServiceType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceType";
import {BundleType} from "../../NiFiObjects/Types/ControllerService/BundleType";
import {ControllerService} from "../../NiFiObjects/ControllerService/ControllerService";

export class ControllerServiceBuilder implements ControllerServiceType {
    id: string;
    name: string;
    type: string;
    state: string;
    properties: object;
    descriptors: object;
    validationErrors: string[];
    bundle: BundleType;

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

    setState(state:string){
        this.state = state;
        return this;
    }

    setProperties(properties: object) {
        this.properties = properties;
        return this;
    }


    setDescriptors(descriptors: object) {
        this.descriptors = descriptors;
        return this;
    }

    setValidationErrors(validationErrors: string[]) {
        this.validationErrors = validationErrors;
        return this;
    }

    setBundle(bundle: BundleType) {
        this.bundle = bundle;
        return this;
    }


    build() {
        return new ControllerService(this);
    }
}