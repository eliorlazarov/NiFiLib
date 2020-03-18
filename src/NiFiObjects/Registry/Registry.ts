import {RegistryType} from "../Types/Registry/RegistryType";
import {RegistryBuilder} from "../../NiFiObjectBuilder/RegistryBuilder/RegistryBuilder";

export class Registry implements RegistryType {
    id: string;
    name: string;
    description: string;
    uri: string;

    constructor(registryClientBuilder: RegistryBuilder) {
        this.id = registryClientBuilder.id;
        this.name = registryClientBuilder.name;
        this.description = registryClientBuilder.description;
        this.uri = registryClientBuilder.uri;

    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getUri(): string {
        return this.uri;
    }

}