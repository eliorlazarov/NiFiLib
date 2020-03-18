import {FlowBreadcrumbType} from "../../Types/Flow/FlowBreadcrumb/FlowBreadcrumbType";
import {FlowBreadcrumbEntityType} from "../../Types/Flow/FlowBreadcrumb/FlowBreadcrumbEntityType";
import {PermissionType} from "../../Types/PermissionType";
import {FlowBreadcrumbEntityBuilder} from "../../../NiFiObjectBuilder/FlowBuilder/FlowBreadcrumbBuilder/FlowBreadcrumbEntityBuilder";


export class FlowBreadcrumbEntity implements FlowBreadcrumbEntityType {

    breadcrumb: FlowBreadcrumbType;
    id: string;
    parentBreadcrumb: FlowBreadcrumbEntityType;
    permissions: PermissionType;
    versionedFlowState: string;


    constructor(flowBreadcrumbEntityBuilder: FlowBreadcrumbEntityBuilder) {
        this.breadcrumb = flowBreadcrumbEntityBuilder.breadcrumb;
        this.id = flowBreadcrumbEntityBuilder.id;
        this.parentBreadcrumb = flowBreadcrumbEntityBuilder.parentBreadcrumb;
        this.permissions = flowBreadcrumbEntityBuilder.permissions;
        this.versionedFlowState = flowBreadcrumbEntityBuilder.versionedFlowState;

    }

    public getBreadcrumb(): FlowBreadcrumbType {
        return this.breadcrumb;
    }

    public getId(): string {
        return this.id;
    }

    public getParentBreadcrumb(): FlowBreadcrumbEntityType {
        return this.parentBreadcrumb;
    }

    public getPermissions(): PermissionType {
        return this.permissions;
    }

    public getVersionedFlowState(): string {
        return this.versionedFlowState;
    }


}