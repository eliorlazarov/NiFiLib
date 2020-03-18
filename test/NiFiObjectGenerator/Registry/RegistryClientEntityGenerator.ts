import {GlobalOperations} from "../../globalOperations";
import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {RegistryClientEntity} from "../../../src/NiFiObjects/Registry/RegistryClientEntity";
import {RegistryClientEntityBuilder} from "../../../src/NiFiObjectBuilder/RegistryBuilder/RegistryClientEntityBuilder";
import {RevisionGenerator} from "../RevisionGenerator";
import {PositionGenerator} from "../PositionGenerator";
import {RegistryGenerator} from "./RegistryGenerator";
import {PermissionGenerator} from "../PermissionGenerator";

export class RegistryClientEntityGenerator implements AbstractObjectGenerator {

    generate(): RegistryClientEntity {
        let registryClientEntity = new RegistryClientEntityBuilder();
        registryClientEntity.setRevision(new RevisionGenerator().generate());
        registryClientEntity.setId(GlobalOperations.getRandId());
        registryClientEntity.setUri(GlobalOperations.getRandString());
        registryClientEntity.setPosition(new PositionGenerator().generate());
        registryClientEntity.setPermission(new PermissionGenerator().generate());
        registryClientEntity.setBulletins([{}]);
        registryClientEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        registryClientEntity.setComponent(new RegistryGenerator().generate());
        return registryClientEntity.build();
    }


}