import {AffectedComponentEntityType} from "../AffectedComponent/AffectedComponentEntityType";

export type VariableType = {
    name: string
    value: string
    processGroupId: string
    affectedComponents: AffectedComponentEntityType[]
}