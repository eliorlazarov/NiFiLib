import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {AccessPolicyEntityGenerator} from "../AccessPolicy/AccessPolicyEntityGenerator";
import {PositionGenerator} from "../../PositionGenerator";
import {TenantEntityGenerator} from "../Tenant/TenantEntityGenerator";
import {User} from "../../../../src/NiFiObjects/SecureObjects/User/User";
import {UserBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/UserBuilder/UserBuilder";

export class UserGenerator implements AbstractObjectGenerator {

    generate(): User {
        let user = new UserBuilder();
        user.setAccessPolicies(GlobalOperations.generateAttributes(new AccessPolicyEntityGenerator()));
        user.setConfigurable(GlobalOperations.getRandBoolean());
        user.setId(GlobalOperations.getRandId());
        user.setIdentity(GlobalOperations.getRandString());
        user.setParentGroupId(GlobalOperations.getRandString());
        user.setPosition(new PositionGenerator().generate());
        user.setUserGroups(GlobalOperations.generateAttributes(new TenantEntityGenerator()));
        user.setVersionedComponentId(GlobalOperations.getRandString());
        return user.build()
    }


}