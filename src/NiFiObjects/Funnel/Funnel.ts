import {FunnelType} from "../Types/Funnel/FunnelType";
import {PositionType} from "../Types/PositionType";
import {FunnelBuilder} from "../../NiFiObjectBuilder/FunnelBuilder/FunnelBuilder";


export class Funnel implements FunnelType {
    id: string;
    position: PositionType;
    parentGroupId: string;
    versionedComponentId: string;
    constructor(funnelBuilder: FunnelBuilder) {
        this.id = funnelBuilder.id;
        this.position = funnelBuilder.position;
        this.parentGroupId = funnelBuilder.parentGroupId;
        this.versionedComponentId = funnelBuilder.versionedComponentId;
    }

    public getId(): string {
        return this.id;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getParentGroupId():string {
        return this.parentGroupId;
    }

    public getVersionedComponentId():string{
        return this. versionedComponentId;
    }



}