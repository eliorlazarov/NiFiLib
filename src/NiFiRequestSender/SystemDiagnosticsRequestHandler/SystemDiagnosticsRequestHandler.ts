import {AbstractRequestHandler} from "../AbstractRequestHandler";

export abstract class SystemDiagnosticsRequestHandler extends AbstractRequestHandler {

    public abstract async getSystemDiagnostics(): Promise<object>
    public abstract async getSystemDiagnostics(nodeWise: boolean): Promise<object>
    public abstract async getSystemDiagnostics(nodeWise?: boolean): Promise<object>


}