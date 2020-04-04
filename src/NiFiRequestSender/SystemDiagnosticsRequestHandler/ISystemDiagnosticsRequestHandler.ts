import {AbstractRequestHandler} from "../AbstractRequestHandler";

export interface ISystemDiagnosticsRequestHandler extends AbstractRequestHandler {

    getSystemDiagnostics(nodeWise?: boolean): Promise<object>


}