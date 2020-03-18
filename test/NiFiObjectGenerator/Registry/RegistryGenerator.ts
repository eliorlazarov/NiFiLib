import {GlobalOperations} from "../../globalOperations";
import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {Registry} from "../../../src/NiFiObjects/Registry/Registry";
import {RegistryBuilder} from "../../../src/NiFiObjectBuilder/RegistryBuilder/RegistryBuilder";

export class RegistryGenerator implements AbstractObjectGenerator {

    generate(): Registry {
        let registry = new RegistryBuilder();
        registry.setId(GlobalOperations.getRandId());
        registry.setName(GlobalOperations.getRandString());
        registry.setUri(GlobalOperations.getRandString());
        registry.setDescription(GlobalOperations.getRandString())
        return registry.build();
    }


}