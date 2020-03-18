import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {VariableRegistryEntity} from "../../../src/NiFiObjects/Registry/VariableRegistryEntity";
import {VariableRegistryEntityBuilder} from "../../../src/NiFiObjectBuilder/VariableRegistryBuilder/VariableRegistryEntityBuilder";
import {RevisionGenerator} from "../RevisionGenerator";
import {VariableRegistryGenerator} from "./VariableRegistryGenerator";


export class VariableRegistryEntityGenerator implements AbstractObjectGenerator {

    generate(): VariableRegistryEntity {
        let variableRegistryEntity = new VariableRegistryEntityBuilder();
        variableRegistryEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        variableRegistryEntity.setProcessGroupRevision(new RevisionGenerator().generate());
        variableRegistryEntity.setVariableRegistry(new VariableRegistryGenerator().generate());
        return variableRegistryEntity.build();
    };


}