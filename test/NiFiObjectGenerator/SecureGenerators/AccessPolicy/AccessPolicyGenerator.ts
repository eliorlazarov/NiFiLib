import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {AccessPolicy} from "../../../../src/NiFiObjects/SecureObjects/AccessPolicy/AccessPolicy";
import {AccessPolicyBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/AccessPolicyBuilder/AccessPolicyBuilder";
import {PositionGenerator} from "../../PositionGenerator";
import {TenantEntityGenerator} from "../Tenant/TenantEntityGenerator";


export class AccessPolicyGenerator implements AbstractObjectGenerator {

    generate(): AccessPolicy {
        let accessPolicy = new AccessPolicyBuilder();
        accessPolicy.setId(GlobalOperations.getRandString());
        accessPolicy.setVersionComponentId(GlobalOperations.getRandId());
        accessPolicy.setParentGroupId(GlobalOperations.getRandId());
        accessPolicy.setPosition(new PositionGenerator().generate());
        accessPolicy.setResource(GlobalOperations.getRandString());
        accessPolicy.setAction(GlobalOperations.getRandString());
        accessPolicy.setComponentReference({});
        accessPolicy.setConfigurable(GlobalOperations.getRandBoolean());
        accessPolicy.setUsers(GlobalOperations.generateAttributes(new TenantEntityGenerator()));
        accessPolicy.setUserGroups(GlobalOperations.generateAttributes(new TenantEntityGenerator()));
        return accessPolicy.build();
    };


}