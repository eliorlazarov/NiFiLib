import {AbstractObjectGenerator} from "./AbstractObjectGenerator";
import {GlobalOperations} from "../globalOperations";
import {Permission} from "../../src/NiFiObjects/Permission";
import {PermissionBuilder} from "../../src/NiFiObjectBuilder/PermissionBuilder";

export class PermissionGenerator implements AbstractObjectGenerator {

    generate(): Permission {
        let permission = new PermissionBuilder();
        permission.setCanRead(GlobalOperations.getRandBoolean());
        permission.setCanWrite(GlobalOperations.getRandBoolean());
        return permission.build();
    }


}