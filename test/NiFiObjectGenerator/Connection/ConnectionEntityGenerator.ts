import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {ConnectionEntity} from "../../../src/NiFiObjects/Connection/ConnectionEntity";
import {ConnectionEntityBuilder} from "../../../src/NiFiObjectBuilder/ConnectionBuilder/ConnectionEntityBuilder";
import {ConnectionGenerator} from "./ConnectionGenerator";
import {PermissionGenerator} from "../PermissionGenerator";
import {RevisionGenerator} from "../RevisionGenerator";


export class ConnectionEntityGenerator implements AbstractObjectGenerator {

    generate(): ConnectionEntity {
        let connectionEntity = new ConnectionEntityBuilder();
        connectionEntity.setComponent(new ConnectionGenerator().generate());
        connectionEntity.setId(GlobalOperations.getRandId());
        connectionEntity.setPermissions(new PermissionGenerator().generate());
        connectionEntity.setPosition(new PositionGenerator().generate());
        connectionEntity.setRevision(new RevisionGenerator().generate());
        connectionEntity.setUri(GlobalOperations.getRandString());
        return connectionEntity.build();
    };


}