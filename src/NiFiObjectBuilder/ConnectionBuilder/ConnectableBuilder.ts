import {ConnectableType} from "../../NiFiObjects/Types/Connection/ConnectableType";
import {Connectable} from "../../NiFiObjects/Connection/Connectable";


export class ConnectableBuilder implements ConnectableType {
    id: string;
    type: string;
    name: string;
    groupId: string;
    versionComponentId: string;


    setId(id: string) {
        this.id = id;
        return this;
    }

    setType(type: string) {
        this.type = type;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setGroupId(groupId: string) {
        this.groupId = groupId;
        return this;
    }

    setVersionComponentId(versionComponentId:string){
        this.versionComponentId = versionComponentId;
        return this;
    }

    build() {
        return new Connectable(this);
    }


}