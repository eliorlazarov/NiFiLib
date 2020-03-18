import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {PermissionGenerator} from "../PermissionGenerator";
import {RevisionGenerator} from "../RevisionGenerator";
import {RemoteProcessGroupEntity} from "../../../src/NiFiObjects/ProcessGroup/RemoteProcessGroupEntity";
import {RemoteProcessGroupEntityBuilder} from "../../../src/NiFiObjectBuilder/ProcessGroupBuilder/RemoteProcessGroupEntityBuilder";
import {RemoteProcessGroupGenerator} from "./RemoteProcessGroupGenerator";

export class RemoteProcessGroupEntityGenerator implements AbstractObjectGenerator {


    generate(): RemoteProcessGroupEntity {
        let remoteProcessGroupEntity = new RemoteProcessGroupEntityBuilder();
        remoteProcessGroupEntity.setBulletins([{}]);
        remoteProcessGroupEntity.setComponent(new RemoteProcessGroupGenerator().generate());
        remoteProcessGroupEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        remoteProcessGroupEntity.setId(GlobalOperations.getRandId());
        remoteProcessGroupEntity.setPermissions(new PermissionGenerator().generate());
        remoteProcessGroupEntity.setOperatePermissions(new PermissionGenerator().generate());
        remoteProcessGroupEntity.setPosition(new PositionGenerator().generate());
        remoteProcessGroupEntity.setRevision(new RevisionGenerator().generate());
        remoteProcessGroupEntity.setUri(GlobalOperations.getRandString());
        return remoteProcessGroupEntity.build();
    }

}