import {FlowBreadcrumbEntityType} from "../FlowBreadcrumb/FlowBreadcrumbEntityType";
import {FlowType} from "../FlowType";

export type ProcessGroupFlowType = {
    id: string;
    uri: string;
    parentGroupId: string;
    breadcrumb: FlowBreadcrumbEntityType;
    flow: FlowType;
    lastRefreshed: string;
}