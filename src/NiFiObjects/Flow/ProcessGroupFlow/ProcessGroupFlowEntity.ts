import {ProcessGroupFlowType} from "../../Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {ProcessGroupFlowEntityType} from "../../Types/Flow/ProcessGroupFlow/ProcessGroupFlowEntityType";
import {PermissionType} from "../../Types/PermissionType";
import {ProcessGroupFlowEntityBuilder} from "../../../NiFiObjectBuilder/FlowBuilder/ProcessGroupFlowBuilder/ProcessGroupFlowEntityBuilder";


export class ProcessGroupFlowEntity implements ProcessGroupFlowEntityType {

    permissions: PermissionType;
    processGroupFlow: ProcessGroupFlowType;

    constructor(processGroupFlowEntityBuilder: ProcessGroupFlowEntityBuilder) {
        this.permissions = processGroupFlowEntityBuilder.permissions;
        this.processGroupFlow = processGroupFlowEntityBuilder.processGroupFlow;
    }


    public getPermissions(): PermissionType {
        return this.permissions;
    }

    public getProcessGroupFlow(): ProcessGroupFlowType {
        return this.processGroupFlow;
    }


}