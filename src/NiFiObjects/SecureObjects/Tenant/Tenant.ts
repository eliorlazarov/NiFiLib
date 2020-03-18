import {TenantType} from "../../Types/SecureTypes/Tenant/TenantType";
import {PositionType} from "../../Types/PositionType";
import {TenantBuilder} from "../../../NiFiObjectBuilder/SecureBuilders/TentantBuilder/TenantBuilder";


export class Tenant implements TenantType {
    id: string;
    versionedComponentId: string;
    parentGroupId: string;
    position: PositionType;
    identity: string;
    configurable: boolean;

    constructor(tentantBuilder: TenantBuilder) {
        this.id = tentantBuilder.id;
        this.versionedComponentId = tentantBuilder.versionedComponentId;
        this.position = tentantBuilder.position;
        this.parentGroupId = tentantBuilder.parentGroupId;
        this.identity = tentantBuilder.identity;
        this.configurable = tentantBuilder.configurable;
    }

    public getId(): string {
        return this.id;
    }

    public getVersionedComponentId(): string {
        return this.versionedComponentId;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getIdentity(): string {
        return this.identity;
    }

    public getConfigurable(): boolean {
        return this.configurable;
    }


}