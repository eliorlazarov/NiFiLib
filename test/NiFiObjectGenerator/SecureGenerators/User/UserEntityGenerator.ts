import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {PositionGenerator} from "../../PositionGenerator";
import {PermissionGenerator} from "../../PermissionGenerator";
import {RevisionGenerator} from "../../RevisionGenerator";
import {UserEntity} from "../../../../src/NiFiObjects/SecureObjects/User/UserEntity";
import {UserEntityBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/UserBuilder/UserEntityBuilder";
import {UserGenerator} from "./UserGenerator";

export class UserEntityGenerator implements AbstractObjectGenerator {

    generate(): UserEntity {
        let userEntity = new UserEntityBuilder();
        userEntity.setComponent(new UserGenerator().generate());
        userEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        userEntity.setId(GlobalOperations.getRandId());
        userEntity.setPermissions(new PermissionGenerator().generate());
        userEntity.setPosition(new PositionGenerator().generate());
        userEntity.setRevision(new RevisionGenerator().generate());
        userEntity.setUri(GlobalOperations.getRandString());
        userEntity.setBulletins([{}]);
        return userEntity.build();
    }


}