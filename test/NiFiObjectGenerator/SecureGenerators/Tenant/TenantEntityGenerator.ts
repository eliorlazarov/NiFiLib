import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {PositionGenerator} from "../../PositionGenerator";
import {TenantEntity} from "../../../../src/NiFiObjects/SecureObjects/Tenant/TenantEntity";
import {TenantEntityBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/TentantBuilder/TenantEntityBuilder";
import {RevisionGenerator} from "../../RevisionGenerator";
import {PermissionGenerator} from "../../PermissionGenerator";
import {TenantGenerator} from "./TenantGenerator";




export class TenantEntityGenerator implements AbstractObjectGenerator {


    generate(): TenantEntity {
        let tenantEntity = new TenantEntityBuilder();
        tenantEntity.setRevision(new RevisionGenerator().generate());
        tenantEntity.setId(GlobalOperations.getRandString());
        tenantEntity.setUri(GlobalOperations.getRandString());
        tenantEntity.setPosition(new PositionGenerator().generate());
        tenantEntity.setPermissions(new PermissionGenerator().generate());
        tenantEntity.setBulletins([{}]);
        tenantEntity.setDisconnectedNodeAcknowledged(GlobalOperations.getRandBoolean());
        tenantEntity.setComponent(new TenantGenerator().generate());
        return tenantEntity.build();
    }

}