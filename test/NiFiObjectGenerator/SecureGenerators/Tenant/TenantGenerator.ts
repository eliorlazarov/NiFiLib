import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {PositionGenerator} from "../../PositionGenerator";
import {Tenant} from "../../../../src/NiFiObjects/SecureObjects/Tenant/Tenant";
import {TenantBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/TentantBuilder/TenantBuilder";

export class TenantGenerator implements AbstractObjectGenerator {


    generate(): Tenant {
        let tenant = new TenantBuilder();
        tenant.setId(GlobalOperations.getRandString());
        tenant.setVersionedComponentId(GlobalOperations.getRandString());
        tenant.setVersionedComponentId(GlobalOperations.getRandString());
        tenant.setPosition(new PositionGenerator().generate());
        tenant.setIdentity(GlobalOperations.getRandString());
        tenant.setConfigurable(GlobalOperations.getRandBoolean());
        tenant.setParentGroupId(GlobalOperations.getRandString());

        return tenant.build();
    }

}