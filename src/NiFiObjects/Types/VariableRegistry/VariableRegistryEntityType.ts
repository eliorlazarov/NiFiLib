import {RevisionType} from "../RevisionType";
import {VariableRegistryType} from "./VariableRegistryType";

export type VariableRegistryEntityType = {
    processGroupRevision: RevisionType,
    variableRegistry: VariableRegistryType,
    disconnectedNodeAcknowledged: boolean
}