import {PermissionType} from "../../PermissionType";
import {FlowBreadcrumbType} from "./FlowBreadcrumbType";

export type FlowBreadcrumbEntityType = {
    id: string;
    permissions:PermissionType;
    versionedFlowState:string;
    breadcrumb:FlowBreadcrumbType;
    parentBreadcrumb:FlowBreadcrumbEntityType;

}