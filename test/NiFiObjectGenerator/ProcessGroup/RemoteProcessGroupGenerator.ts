import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {RemoteProcessGroup} from "../../../src/NiFiObjects/ProcessGroup/RemoteProcessGroup";
import {RemoteProcessGroupBuilder} from "../../../src/NiFiObjectBuilder/ProcessGroupBuilder/RemoteProcessGroupBuilder";

export class RemoteProcessGroupGenerator implements AbstractObjectGenerator {


    generate(): RemoteProcessGroup {
        let remoteProcessGroup = new RemoteProcessGroupBuilder();
        remoteProcessGroup.setId(GlobalOperations.getRandId());
        remoteProcessGroup.setVersionComponentId(GlobalOperations.getRandId());
        remoteProcessGroup.setParentGroupId(GlobalOperations.getRandId());
        remoteProcessGroup.setPosition(new PositionGenerator().generate());
        remoteProcessGroup.setTargetUri(GlobalOperations.getRandString());
        remoteProcessGroup.setTargetUris(GlobalOperations.getRandString());
        return remoteProcessGroup.build();
    }

}