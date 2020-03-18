import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {GlobalOperations} from "../globalOperations";
import {Bundle} from "../../src/NiFiObjects/Bundle";
import {BundleBuilder} from "../../src/NiFiObjectBuilder/BundleBuilder";


export class BundleGenerator implements AbstractObjectGenerator {

    generate(): Bundle {
        let bundle = new BundleBuilder();
        bundle.setGroup(GlobalOperations.getRandString());
        bundle.setArtifact(GlobalOperations.getRandString());
        bundle.setVersion(GlobalOperations.getRandId());
        return bundle.build();
    };


}