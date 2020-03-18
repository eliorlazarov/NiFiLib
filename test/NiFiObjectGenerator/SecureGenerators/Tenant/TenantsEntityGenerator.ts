import {AbstractObjectGenerator} from "../../AbstractObjectGenerator";
import {GlobalOperations} from "../../../globalOperations";
import {TenantsEntity} from "../../../../src/NiFiObjects/SecureObjects/Tenant/TenantsEntity";
import {TenantEntityGenerator} from "./TenantEntityGenerator";
import {TenantsEntityBuilder} from "../../../../src/NiFiObjectBuilder/SecureBuilders/TentantBuilder/TenantsEntityBuilder";


export class TenantsEntityGenerator implements AbstractObjectGenerator {


    generate(): TenantsEntity {
        let tenantsEntity = new TenantsEntityBuilder();
        tenantsEntity.setUsers(GlobalOperations.generateAttributes(new TenantEntityGenerator()));
        tenantsEntity.setUserGroups(GlobalOperations.generateAttributes(new TenantEntityGenerator()));
        return tenantsEntity.build();
    }

}