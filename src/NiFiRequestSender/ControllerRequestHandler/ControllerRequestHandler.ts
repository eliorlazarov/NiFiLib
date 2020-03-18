import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {ControllerServiceType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceType";
import {RegistryType} from "../../NiFiObjects/Types/Registry/RegistryType";
import {ReportingTaskType} from "../../NiFiObjects/Types/ReportingTaskType";
import {RegistryClientEntityType} from "../../NiFiObjects/Types/Registry/RegistryClientEntityType";

export abstract class ControllerRequestHandler extends AbstractRequestHandler {
    public abstract async createControllerService(controllerService: ControllerServiceType): Promise<ControllerServiceType>;

    public abstract async createRegistryClient(registryClient: RegistryClientEntityType): Promise<RegistryClientEntityType>;

    public abstract async getRegistries(): Promise<RegistryClientEntityType[]>;

    public abstract async getRegistryClientById(id: string): Promise<RegistryClientEntityType>;

    public abstract async updateRegistryClient(id: string): Promise<RegistryClientEntityType>;

    public abstract async deleteRegistryClient(id: string): Promise<RegistryClientEntityType>;

    public abstract async createReportingTask(reportingTask: ReportingTaskType): Promise<ReportingTaskType>


}
