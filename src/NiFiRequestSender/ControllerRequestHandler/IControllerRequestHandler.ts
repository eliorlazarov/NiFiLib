import {AbstractRequestHandler} from "../AbstractRequestHandler";
import {ControllerServiceType} from "../../NiFiObjects/Types/ControllerService/ControllerServiceType";
import {RegistryType} from "../../NiFiObjects/Types/Registry/RegistryType";
import {ReportingTaskType} from "../../NiFiObjects/Types/ReportingTaskType";
import {RegistryClientEntityType} from "../../NiFiObjects/Types/Registry/RegistryClientEntityType";

export interface IControllerRequestHandler {
    createControllerService(controllerService: ControllerServiceType): Promise<ControllerServiceType>;

    createRegistryClient(registryClient: RegistryClientEntityType): Promise<RegistryClientEntityType>;

    getRegistries(): Promise<RegistryClientEntityType[]>;

    getRegistryClientById(id: string): Promise<RegistryClientEntityType>;

    updateRegistryClient(id: string, registryClient: RegistryClientEntityType): Promise<RegistryClientEntityType>;

    deleteRegistryClient(id: string): Promise<RegistryClientEntityType>;

    createReportingTask(reportingTask: ReportingTaskType): Promise<ReportingTaskType>

}
