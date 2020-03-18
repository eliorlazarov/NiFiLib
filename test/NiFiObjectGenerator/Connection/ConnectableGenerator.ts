import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {Connectable} from "../../../src/NiFiObjects/Connection/Connectable";
import {ConnectableBuilder} from "../../../src/NiFiObjectBuilder/ConnectionBuilder/ConnectableBuilder";
import {GlobalOperations} from "../../globalOperations";


export class ConnectableGenerator implements AbstractObjectGenerator {


    generate(): Connectable {
        let connectable = new ConnectableBuilder();
        connectable.setId(GlobalOperations.getRandId());
        connectable.setName(GlobalOperations.getRandString());
        connectable.setType(GlobalOperations.getRandString());
        connectable.setGroupId(GlobalOperations.getRandId());
        connectable.setVersionComponentId(GlobalOperations.getRandString());
        return connectable.build();
    };


}