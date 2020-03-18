import {SystemDiagnosticsRequestHandler} from "./SystemDiagnosticsRequestHandler";
import {GlobalUtils} from "../../utils/globalUtils";

export class DefaultSystemDiagnosticsRequestHandler extends SystemDiagnosticsRequestHandler {

    url = `/system-diagnostics`;

    async getSystemDiagnostics(): Promise<object>;
    async getSystemDiagnostics(nodeWise: boolean): Promise<object>;
    async getSystemDiagnostics(nodeWise?: boolean): Promise<object>;
    async getSystemDiagnostics(nodeWise?: boolean): Promise<object> {
        nodeWise = GlobalUtils.parseBoolean(nodeWise, false);
        let result = await this.Get(this.url + `?nodewise=${JSON.stringify(nodeWise)}`);
        return result['systemDiagnostics'] as object
    }

}