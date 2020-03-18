import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {PositionGenerator} from "../../PositionGenerator";
import {UserGroupEntity} from "../../../../src/NiFiObjects/SecureObjects/UserGroup/UserGroupEntity";
import {UserGroupEntityBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/UserGroupBuilder/UserGroupEntityBuilder";
import {UserGroupGenerator} from "./UserGroupGenerator";
import {PermissionGenerator} from "../../PermissionGenerator";
import {RevisionGenerator} from "../../RevisionGenerator";

export class UserGroupEntityGenerator implements AbstractObjectGenerator {

    generate(): UserGroupEntity {
        let userGroupEntity = new UserGroupEntityBuilder();
        userGroupEntity.setComponent(new UserGroupGenerator().generate());
        userGroupEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        userGroupEntity.setId(GlobalOperations.getRandId());
        userGroupEntity.setPermissions(new PermissionGenerator().generate());
        userGroupEntity.setPosition(new PositionGenerator().generate());
        userGroupEntity.setRevision(new RevisionGenerator().generate());
        userGroupEntity.setUri(GlobalOperations.getRandString());
        return userGroupEntity.build();
    }


}