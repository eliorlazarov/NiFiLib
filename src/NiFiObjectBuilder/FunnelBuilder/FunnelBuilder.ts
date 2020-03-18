import {FunnelType} from "../../NiFiObjects/Types/Funnel/FunnelType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {Funnel} from "../../NiFiObjects/Funnel/Funnel";


export class FunnelBuilder implements FunnelType {
    id: string;
    position: PositionType;
    parentGroupId: string;
    versionedComponentId: string;


    setId(id: string) {
        this.id = id;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId = parentGroupId;
        return this;
    }

    setVersionedComponentId(versionedComponentId: string) {
        this.versionedComponentId = versionedComponentId;
        return this;
    }

    build() {
        return new Funnel(this);
    }

}