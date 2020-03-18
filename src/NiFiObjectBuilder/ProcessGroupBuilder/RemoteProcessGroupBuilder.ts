import {RemoteProcessGroupType} from "../../NiFiObjects/Types/ProcessGroup/RemoteProcessGroupType";
import {PositionType} from "../../NiFiObjects/Types/PositionType";
import {RemoteProcessGroup} from "../../NiFiObjects/ProcessGroup/RemoteProcessGroup";

export class RemoteProcessGroupBuilder implements RemoteProcessGroupType {
    id: string;
    versionedComponentId: string;
    parentGroupId: string;
    position: PositionType;
    targetUri: string;
    targetUris: string;
    name: string;

    setId(id: string) {
        this.id = id;
        return this;
    }

    setVersionComponentId(versionComponentId: string) {
        this.versionedComponentId = versionComponentId;
        return this;
    }

    setParentGroupId(parentGroupId: string) {
        this.parentGroupId = parentGroupId;
        return this;
    }

    setPosition(position: PositionType) {
        this.position = position;
        return this;
    }

    setTargetUri(targetUri: string) {
        this.targetUri = targetUri;
        return this;
    }

    setTargetUris(targetUris: string) {
        this.targetUris = targetUris;
        return this;
    }

    build() {
        return new RemoteProcessGroup(this);
    }
}