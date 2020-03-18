import {PositionType} from "../PositionType";

export type RemoteProcessGroupType = {
    id:string;
    versionedComponentId:string;
    parentGroupId:string;
    position: PositionType;
    targetUri:string;
    targetUris:string;
}