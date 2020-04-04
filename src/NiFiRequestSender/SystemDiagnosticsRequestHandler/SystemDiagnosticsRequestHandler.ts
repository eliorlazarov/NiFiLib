import {ISystemDiagnosticsRequestHandler} from "./ISystemDiagnosticsRequestHandler";
import {GlobalUtils} from "../../utils/globalUtils";
import { AbstractRequestHandler } from "../AbstractRequestHandler";

export class SystemDiagnosticsRequestHandler extends AbstractRequestHandler implements ISystemDiagnosticsRequestHandler {

    url = `/system-diagnostics`;

    
    async getSystemDiagnostics(nodeWise?: boolean): Promise<object> {
        nodeWise = !!nodeWise
        let result = await this.Get(this.url + `?nodewise=${JSON.stringify(nodeWise)}`);
        return result['systemDiagnostics'] as object
    }

}