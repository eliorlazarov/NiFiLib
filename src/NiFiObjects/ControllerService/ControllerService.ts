import {ControllerServiceType} from "../Types/ControllerService/ControllerServiceType";
import {BundleType} from "../Types/ControllerService/BundleType";
import {ControllerServiceBuilder} from "../../NiFiObjectBuilder/ControllerServiceBuilder/ControllerServiceBuilder";

export class ControllerService implements ControllerServiceType {
    id: string;
    name: string;
    type: string;
    state: string;
    properties: object;
    descriptors: object;
    validationErrors: string[];
    bundle: BundleType;

    constructor(ControllerServiceBuilder: ControllerServiceBuilder) {
        this.id = ControllerServiceBuilder.id;
        this.name = ControllerServiceBuilder.name;
        this.type = ControllerServiceBuilder.type;
        this.state = ControllerServiceBuilder.state;
        this.properties = ControllerServiceBuilder.properties;
        this.descriptors = ControllerServiceBuilder.descriptors;
        this.validationErrors = ControllerServiceBuilder.validationErrors;
        this.bundle = ControllerServiceBuilder.bundle;

    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): string {
        return this.type;
    }

    public getState(): string {
        return this.state;
    }

    public getProperties(): object {
        return this.properties;
    }

    public getDescriptors(): object {
        return this.descriptors;
    }

    public getValidationErrors(): string[] {
        return this.validationErrors;
    }

    public getBundle(): BundleType {
        return this.bundle;
    }

}