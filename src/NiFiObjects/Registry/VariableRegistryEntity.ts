import {VariableRegistryEntityType} from "../Types/VariableRegistry/VariableRegistryEntityType";
import {VariableRegistryType} from "../Types/VariableRegistry/VariableRegistryType";
import {RevisionType} from "../Types/RevisionType";
import {VariableRegistryEntityBuilder} from "../../NiFiObjectBuilder/VariableRegistryBuilder/VariableRegistryEntityBuilder";


export class VariableRegistryEntity implements VariableRegistryEntityType {
    processGroupRevision: RevisionType;
    variableRegistry: VariableRegistryType;
    disconnectedNodeAcknowledged: boolean;

    constructor(variableRegistryEntityBuilder: VariableRegistryEntityBuilder) {
        this.processGroupRevision = variableRegistryEntityBuilder.processGroupRevision;
        this.variableRegistry = variableRegistryEntityBuilder.variableRegistry;
        this.disconnectedNodeAcknowledged = variableRegistryEntityBuilder.disconnectedNodeAcknowledged;
    }

    public getProcessGroupRevision(): RevisionType {
        return this.processGroupRevision;
    }

    public getVariableRegistry(): VariableRegistryType {
        return this.variableRegistry;
    }

    public getDisconnectedNodeAcknowledged(): boolean {
        return this.disconnectedNodeAcknowledged;
    }

}