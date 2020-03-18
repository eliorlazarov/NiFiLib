import {BundleType} from "./Types/ControllerService/BundleType";
import {BundleBuilder} from "../NiFiObjectBuilder/BundleBuilder";

export class Bundle implements BundleType {
    group: string;
    artifact: string;
    version: string;

    constructor(bundleBuilder: BundleBuilder) {
        this.group = bundleBuilder.group;
        this.artifact = bundleBuilder.artifact;
        this.version = bundleBuilder.version;
    }

    public getGroup(): string {
        return this.group;
    }

    public getArtifact(): string {
        return this.artifact;
    }

    public getVersion(): string {
        return this.version;
    }

}