import {RemoteProcessGroupType} from "../Types/ProcessGroup/RemoteProcessGroupType";
import {PositionType} from "../Types/PositionType";
import {RemoteProcessGroupBuilder} from "../../NiFiObjectBuilder/ProcessGroupBuilder/RemoteProcessGroupBuilder";

export class RemoteProcessGroup implements RemoteProcessGroupType {
    id: string;
    versionedComponentId: string;
    parentGroupId: string;
    position: PositionType;
    targetUri: string;
    targetUris: string;

    constructor(remoteProcessGroupBuilder: RemoteProcessGroupBuilder) {
        this.id = remoteProcessGroupBuilder.id;
        this.versionedComponentId = remoteProcessGroupBuilder.versionedComponentId;
        this.parentGroupId = remoteProcessGroupBuilder.parentGroupId;
        this.position = remoteProcessGroupBuilder.position;
        this.targetUri = remoteProcessGroupBuilder.targetUri;
        this.targetUris = remoteProcessGroupBuilder.targetUris;

    }

    public getId(): string {
        return this.id;
    }

    public getVersionedComponentId(): string {
        return this.versionedComponentId;
    }

    public getParentGroupId(): string {
        return this.parentGroupId;
    }

    public getPosition(): PositionType {
        return this.position;
    }

    public getTargetUri(): string {
        return this.targetUri;
    }

    public getTargetUris(): string {
        return this.targetUris;
    }


}