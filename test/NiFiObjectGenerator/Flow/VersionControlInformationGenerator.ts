import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {GlobalOperations} from "../../globalOperations";
import {VersionControlInformationBuilder} from "../../../src/NiFiObjectBuilder/FlowBuilder/VersionControlInformationBuilder";
import {VersionControlInformation} from "../../../src/NiFiObjects/Flow/VersionControlInformation";


export class VersionControlInformationGenerator implements AbstractObjectGenerator {

    generate(): VersionControlInformation {
        let versionControlInformation = new VersionControlInformationBuilder();
        versionControlInformation.setBucketId(GlobalOperations.getRandId());
        versionControlInformation.setBucketName(GlobalOperations.getRandString());
        versionControlInformation.setFlowDescription(GlobalOperations.getRandString());
        versionControlInformation.setFlowId(GlobalOperations.getRandId());
        versionControlInformation.setFlowName(GlobalOperations.getRandString());
        versionControlInformation.setGroupId(GlobalOperations.getRandId());
        versionControlInformation.setRegistryId(GlobalOperations.getRandId());
        versionControlInformation.setRegistryName(GlobalOperations.getRandString());
        versionControlInformation.setState(GlobalOperations.getRandString());
        versionControlInformation.setStateExplanation(GlobalOperations.getRandString());
        versionControlInformation.setVersion(GlobalOperations.getRandNum());
        return versionControlInformation.build();
    };


}