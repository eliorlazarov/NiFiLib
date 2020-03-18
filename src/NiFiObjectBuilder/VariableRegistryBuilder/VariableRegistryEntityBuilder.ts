import {VariableRegistryEntityType} from "../../NiFiObjects/Types/VariableRegistry/VariableRegistryEntityType";
import {RevisionType} from "../../NiFiObjects/Types/RevisionType";
import {VariableRegistryType} from "../../NiFiObjects/Types/VariableRegistry/VariableRegistryType";
import {VariableRegistryEntity} from "../../NiFiObjects/Registry/VariableRegistryEntity";


export class VariableRegistryEntityBuilder implements VariableRegistryEntityType{

    disconnectedNodeAcknowledged: boolean;
    processGroupRevision: RevisionType;
    variableRegistry: VariableRegistryType;

    setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged:boolean) {
        this.disconnectedNodeAcknowledged = disconnectedNodeAcknowledged;
        return this;
    }

    setProcessGroupRevision(processGroupRevision: RevisionType) {
        this.processGroupRevision = processGroupRevision;
        return this;
    }

    setVariableRegistry(variableRegistry: VariableRegistryType) {
        this.variableRegistry = variableRegistry;
        return this;
    }



    build() {
        return new VariableRegistryEntity(this);
    }


}