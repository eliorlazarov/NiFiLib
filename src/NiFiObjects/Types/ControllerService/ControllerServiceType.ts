import {BundleType} from "./BundleType";

export type ControllerServiceType = {
    id: string,
    name: string,
    type: string,
    state: string,
    properties: object,
    descriptors: object,
    validationErrors: string[],
    bundle: BundleType
}