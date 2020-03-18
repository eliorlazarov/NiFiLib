import {ControllerRequestHandler} from "./ControllerRequestHandler";
import {ControllerServiceType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceType";
import {RegistryType} from "../../NiFiObjects/Types/Registry/RegistryType";
import {ReportingTaskType} from "../../NiFiObjects/Types/ReportingTaskType";
import {RegistryClientEntityType} from "../../NiFiObjects/Types/Registry/RegistryClientEntityType";

export class DefaultControllerRequestHandler extends ControllerRequestHandler {

    url = `/controller`;

    async createControllerService(controllerService: ControllerServiceType): Promise<ControllerServiceType> {
        let result = await this.Post(this.url +`/controller-services`, controllerService);
        return  result["component"] as ControllerServiceType;
    }

    async createRegistryClient(registryClient: RegistryClientEntityType): Promise<RegistryClientEntityType> {
        return await this.Post(this.url +`/registry-clients`, registryClient) as RegistryClientEntityType;
    }

    async createReportingTask(reportingTask: ReportingTaskType): Promise<ReportingTaskType> {
        let result = await this.Post(this.url +`/reporting-tasks`, reportingTask);
        return result["component"] as ReportingTaskType
    }

    async deleteRegistryClient(id: string): Promise<RegistryClientEntityType> {
        return await this.Delete(this.url +`/registry-clients/${id}`) as RegistryClientEntityType;
    }

    async getRegistryClientById(id: string): Promise<RegistryClientEntityType> {
        return await this.Get(this.url +`/registry-clients/${id}`) as RegistryClientEntityType;

    }

    async getRegistries(): Promise<RegistryClientEntityType[]> {
        let result = await this.Get(this.url +`/registry-clients`);
        return result['registries'] as RegistryClientEntityType[]
    }

    async updateRegistryClient(id: string): Promise<RegistryClientEntityType> {
        return await this.Put(this.url +`/registry-clients/${id}`) as RegistryClientEntityType;
    }


}