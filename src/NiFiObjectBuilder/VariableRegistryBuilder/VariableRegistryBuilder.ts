import {VariableRegistryType} from "../../NiFiObjects/Types/VariableRegistry/VariableRegistryType";
import {VariableRegistry} from "../../NiFiObjects/Registry/VariableRegistry";


export class VariableRegistryBuilder implements VariableRegistryType{

    processGroupId: string;
    variables: object[];


    setProcessGroupId(processGroupId:string) {
        this.processGroupId = processGroupId;
        return this;
    }

    setVariables(variables: object[]) {
        this.variables = variables;
        return this;
    }



    build() {
        return new VariableRegistry(this);
    }



}