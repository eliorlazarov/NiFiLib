import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../PositionGenerator";
import {FunnelEntity} from "../../../src/NiFiObjects/Funnel/FunnelEntity";
import {FunnelEntityBuilder} from "../../../src/NiFiObjectBuilder/FunnelBuilder/FunnelEntityBuilder";
import {FunnelGenerator} from "./FunnelGenerator";
import {PermissionGenerator} from "../PermissionGenerator";
import {RevisionGenerator} from "../RevisionGenerator";


export class FunnelEntityGenerator implements AbstractObjectGenerator {

    generate(): FunnelEntity {
        let funnelEntity = new FunnelEntityBuilder();
        funnelEntity.setComponent(new FunnelGenerator().generate());
        funnelEntity.setId(GlobalOperations.getRandId());
        funnelEntity.setPermissions(new PermissionGenerator().generate());
        funnelEntity.setPosition(new PositionGenerator().generate());
        funnelEntity.setRevision(new RevisionGenerator().generate());
        funnelEntity.setUri(GlobalOperations.getRandString());
        return funnelEntity.build();
    };


}