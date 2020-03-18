import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {PortEntity} from "../../../src/NiFiObjects/Port/PortEntity";
import {PortEntityBuilder} from "../../../src/NiFiObjectBuilder/PortBuilder/PortEntityBuilder";
import {PortGenerator} from "./PortGenerator";
import {PermissionGenerator} from "../PermissionGenerator";
import {RevisionGenerator} from "../RevisionGenerator";

export class PortEntityGenerator implements AbstractObjectGenerator {

    generate(): PortEntity {
        let portEntity = new PortEntityBuilder();
        portEntity.setBulletins([{}]);
        portEntity.setComponent(new PortGenerator().generate());
        portEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        portEntity.setId(GlobalOperations.getRandId());
        portEntity.setOperatePermissions(new PermissionGenerator().generate());
        portEntity.setPermissions(new PermissionGenerator().generate());
        portEntity.setPortType(GlobalOperations.getRandString());
        portEntity.setPosition(new PositionGenerator().generate());
        portEntity.setRevision(new RevisionGenerator().generate());
        portEntity.setUri(GlobalOperations.getRandString());
        return portEntity.build();
    }


}