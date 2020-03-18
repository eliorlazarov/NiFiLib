import {BundleType} from "../NiFiObjects/Types/ControllerService/BundleType";
import {Bundle} from "../NiFiObjects/Bundle";

export class BundleBuilder implements BundleType {
    group: string;
    artifact: string;
    version: string;


    setGroup(group: string) {
        this.group = group;
        return this;
    }


    setArtifact(artifact: string) {
        this.artifact = artifact;
        return this;
    }

    setVersion(version: string) {
        this.version = version;
        return this;
    }


    build() {
        return new Bundle(this);
    }
}