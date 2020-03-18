import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {PositionGenerator} from "../../PositionGenerator";
import {AccessPolicyEntity} from "../../../../src/NiFiObjects/SecureObjects/AccessPolicy/AccessPolicyEntity";
import {RevisionGenerator} from "../../RevisionGenerator";
import {AccessPolicyEntityBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/AccessPolicyBuilder/AccessPolicyEntityBuilder";
import {PermissionGenerator} from "../../PermissionGenerator";
import {AccessPolicyGenerator} from "./AccessPolicyGenerator";


export class AccessPolicyEntityGenerator implements AbstractObjectGenerator {

    generate(): AccessPolicyEntity {
        let accessPolicyEntity = new AccessPolicyEntityBuilder();
        accessPolicyEntity.setId(GlobalOperations.getRandString());
        accessPolicyEntity.setUri(GlobalOperations.getRandString());
        accessPolicyEntity.setPosition(new PositionGenerator().generate());
        accessPolicyEntity.setRevision(new RevisionGenerator().generate());
        accessPolicyEntity.setPermissions(new PermissionGenerator().generate());
        accessPolicyEntity.setBuiletins([{}]);
        accessPolicyEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        accessPolicyEntity.setGenerated(GlobalOperations.getRandString());
        accessPolicyEntity.setComponent(new AccessPolicyGenerator().generate());
        return accessPolicyEntity.build();
    };


}