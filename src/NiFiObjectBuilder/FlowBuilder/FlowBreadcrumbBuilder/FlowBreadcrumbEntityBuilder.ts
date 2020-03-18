import {FlowBreadcrumbType} from "../../../NiFiObjects/Types/Flow/FlowBreadcrumb/FlowBreadcrumbType";
import {FlowBreadcrumbEntityType} from "../../../NiFiObjects/Types/Flow/FlowBreadcrumb/FlowBreadcrumbEntityType";
import {PermissionType} from "../../../NiFiObjects/Types/PermissionType";
import {FlowBreadcrumbEntity} from "../../../NiFiObjects/Flow/FlowBreadcrumb/FlowBreadcrumbEntity";


export class FlowBreadcrumbEntityBuilder implements FlowBreadcrumbEntityType {

    breadcrumb: FlowBreadcrumbType;
    id: string;
    parentBreadcrumb: FlowBreadcrumbEntityType;
    permissions: PermissionType;
    versionedFlowState: string;

    setBreadcrumb(breadcrumb: FlowBreadcrumbType) {
        this.breadcrumb = breadcrumb;
        return this;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    setParentBreadcrumb(parentBreadcrumb: FlowBreadcrumbEntityType) {
        this.parentBreadcrumb = parentBreadcrumb;
    }

    setPermissions(permissions: PermissionType) {
        this.permissions = permissions;
        return this;
    }

    setVersionedFlowState(versionedFlowState: string) {
        this.versionedFlowState = versionedFlowState;
        return this;
    }

    build() {
        return new FlowBreadcrumbEntity(this);
    }


}