import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {UserGroup} from "../../../../src/NiFiObjects/SecureObjects/UserGroup/UserGroup";
import {UserGroupBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/UserGroupBuilder/UserGroupBuilder";
import {AccessPolicyEntityGenerator} from "../AccessPolicy/AccessPolicyEntityGenerator";
import {PositionGenerator} from "../../PositionGenerator";
import {TenantEntityGenerator} from "../Tenant/TenantEntityGenerator";

export class UserGroupGenerator implements AbstractObjectGenerator {

    generate(): UserGroup {
        let userGroup = new UserGroupBuilder();
        userGroup.setAccessPolicies(GlobalOperations.generateAttributes(new AccessPolicyEntityGenerator()));
        userGroup.setConfigurable(GlobalOperations.getRandBoolean());
        userGroup.setId(GlobalOperations.getRandId());
        userGroup.setIdentity(GlobalOperations.getRandString());
        userGroup.setParentGroupId(GlobalOperations.getRandString());
        userGroup.setPosition(new PositionGenerator().generate());
        userGroup.setUsers(GlobalOperations.generateAttributes(new TenantEntityGenerator()));
        userGroup.setVersionedComponentId(GlobalOperations.getRandString());
        return userGroup.build();
    }


}