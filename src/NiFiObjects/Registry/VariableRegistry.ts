import {VariableRegistryType} from "../Types/VariableRegistry/VariableRegistryType";
import {VariableRegistryBuilder} from "../../NiFiObjectBuilder/VariableRegistryBuilder/VariableRegistryBuilder";

export class VariableRegistry implements VariableRegistryType {


    processGroupId: string;
    variables: object[];

    constructor(variableRegistryBuilder: VariableRegistryBuilder) {
        this.processGroupId = variableRegistryBuilder.processGroupId;
        this.variables = variableRegistryBuilder.variables;

    }

    public getProcessGroupId(): string {
        return this.processGroupId;
    }

    public getVariables(): object[]{
        return this.variables;
    }


}