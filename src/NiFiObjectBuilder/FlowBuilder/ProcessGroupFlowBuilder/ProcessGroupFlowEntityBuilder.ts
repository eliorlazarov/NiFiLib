import {ProcessGroupFlowType} from "../../../NiFiObjects/Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {ProcessGroupFlowEntityType} from "../../../NiFiObjects/Types/Flow/ProcessGroupFlow/ProcessGroupFlowEntityType";
import {PermissionType} from "../../../NiFiObjects/Types/PermissionType";
import {ProcessGroupFlowEntity} from "../../../NiFiObjects/Flow/ProcessGroupFlow/ProcessGroupFlowEntity";


export class ProcessGroupFlowEntityBuilder implements ProcessGroupFlowEntityType {


    permissions: PermissionType;
    processGroupFlow: ProcessGroupFlowType;

    setPermissions(permissions: PermissionType) {
        this.permissions = permissions;
        return this;
    }

    setProcessGroupFlow(processGroupFlow: ProcessGroupFlowType) {
        this.processGroupFlow = processGroupFlow;
        return this;
    }


    build() {
        return new ProcessGroupFlowEntity(this);
    }


}