import {VariableRegistry} from "../../../src/NiFiObjects/Registry/VariableRegistry";
import {VariableRegistryBuilder} from "../../../src/NiFiObjectBuilder/VariableRegistryBuilder/VariableRegistryBuilder";
import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";


export class VariableRegistryGenerator implements AbstractObjectGenerator {

    generate(): VariableRegistry {
        let variableRegistry = new VariableRegistryBuilder();
        variableRegistry.setProcessGroupId(GlobalOperations.getRandString());
        variableRegistry.setVariables([{}]);
        return variableRegistry.build();
    };


}