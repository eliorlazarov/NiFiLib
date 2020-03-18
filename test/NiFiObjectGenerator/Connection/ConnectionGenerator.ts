import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {Connection} from "../../../src/NiFiObjects/Connection/Connection";
import {ConnectionBuilder} from "../../../src/NiFiObjectBuilder/ConnectionBuilder/ConnectionBuilder";
import {PositionGenerator} from "../PositionGenerator";
import {ConnectableGenerator} from "./ConnectableGenerator";


export class ConnectionGenerator implements AbstractObjectGenerator {

    generate(): Connection {
        let connection = new ConnectionBuilder();
        connection.setId(GlobalOperations.getRandId());
        connection.setName(GlobalOperations.getRandString());
        connection.setPosition(new PositionGenerator().generate());
        connection.setSource(new ConnectableGenerator().generate());
        connection.setDestination(new ConnectableGenerator().generate());
        connection.setParentGroupId(GlobalOperations.getRandString());
        connection.setVersionComponentId(GlobalOperations.getRandString());
        return connection.build();
    };


}