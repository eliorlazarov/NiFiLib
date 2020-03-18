import {PositionType} from "../PositionType";
import {ConnectableType} from "./ConnectableType";

export type ConnectionType = {
    id: string;
    versionComponentId:string;
    parentGroupId:string;
    position: PositionType;
    source: ConnectableType;
    destination: ConnectableType;
    name: string;
}