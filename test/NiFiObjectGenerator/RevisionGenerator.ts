import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {Revision} from "../../src/NiFiObjects/Revision";
import {RevisionBuilder} from "../../src/NiFiObjectBuilder/RevisionBuilder";
import {GlobalOperations} from "../globalOperations";

export class RevisionGenerator implements AbstractObjectGenerator {

    generate(): Revision {
        let revision = new RevisionBuilder();
        revision.setClientId(GlobalOperations.getRandString());
        revision.setVersion(GlobalOperations.getRandNum());
        revision.setLastModifier(GlobalOperations.getRandString());
        return revision.build();
    }


}