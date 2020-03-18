import {TenantType} from "../../../NiFiObjects/Types/SecureTypes/Tenant/TenantType";
import {PositionType} from "../../../NiFiObjects/Types/PositionType";
import {Tenant} from "../../../NiFiObjects/SecureObjects/Tenant/Tenant";


export class TenantBuilder implements TenantType {
    id: string;
    versionedComponentId: string;
    parentGroupId: string;
    position: PositionType;
    identity: string;
    configurable: boolean;

    setId(id: string) {
        this.id = id;
        return this;
    }

    setVersionedComponentId(versionedComponentId: string) {
        this.versionedComponentId = versionedComponentId;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId= parentGroupId;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setIdentity(identity: string) {
        this.identity = identity;
        return this;
    }


    setConfigurable(configurable: boolean) {
        this.configurable= configurable;
        return this;
    }

    build() {
        return new Tenant(this);
    }
}