import {RegistryType} from "../../NiFiObjects/Types/Registry/RegistryType";
import {Registry} from "../../NiFiObjects/Registry/Registry";

export class RegistryBuilder implements RegistryType{
    id: string;
    name: string;
    description: string;
    uri: string;

    setId(id: string) {
        this.id = id;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    setUri(uri: string) {
        this.uri = uri;
        return this;
    }


    build() {
        return new Registry(this);
    }
}