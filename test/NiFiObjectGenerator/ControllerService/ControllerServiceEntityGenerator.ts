import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {ControllerServiceEntity} from "../../../src/NiFiObjects/ControllerService/ControllerServiceEntity";
import {RevisionGenerator} from "../RevisionGenerator";
import {ControllerServiceGenerator} from "./ControllerServiceGenerator";
import {ControllerServiceEntityBuilder} from "../../../src/NiFiObjectBuilder/ControllerServiceBuilder/ControllerServiceEntityBuilder";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {PermissionGenerator} from "../PermissionGenerator";
import {ControllerServiceStatusGenerator} from "./ControllerServiceStatusGenerator";


export class ControllerServiceEntityGenerator implements AbstractObjectGenerator {

    generate(): ControllerServiceEntity {
        let controllerServiceEntity = new ControllerServiceEntityBuilder();
        controllerServiceEntity.setRevision(new RevisionGenerator().generate());
        controllerServiceEntity.setComponent(new ControllerServiceGenerator().generate());
        controllerServiceEntity.setId(GlobalOperations.getRandId());
        controllerServiceEntity.setUri(GlobalOperations.getRandString());
        controllerServiceEntity.setPosition(new PositionGenerator().generate());
        controllerServiceEntity.setPermission(new PermissionGenerator().generate());
        controllerServiceEntity.setBulletins([{}]);
        controllerServiceEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        controllerServiceEntity.setParentGroupId(GlobalOperations.getRandString());
        controllerServiceEntity.setOperatePermissions(new PermissionGenerator().generate());
        controllerServiceEntity.setStatus(new ControllerServiceStatusGenerator().generate());
        return controllerServiceEntity.build();
    };


}