import {AbstractObjectGenerator} from "../AbstractObjectGenerator";
import {ProcessorConfig} from "../../../src/NiFiObjects/Processor/ProcessorConfig";
import {ProcessorConfigBuilder} from "../../../src/NiFiObjectBuilder/ProcessorBuilder/ProcessorConfigBuilder";
import {GlobalOperations} from "../../globalOperations";

export class ProcessorConfigGenerator implements AbstractObjectGenerator {

    generate(): ProcessorConfig {
        let processorConfig = new ProcessorConfigBuilder();
        processorConfig.setProperties({});
        processorConfig.setDescriptors({});
        processorConfig.setSchedulingPeriod(GlobalOperations.getRandString());
        processorConfig.setExecutionMode(GlobalOperations.getRandString());
        processorConfig.setPenaltyDuration(GlobalOperations.getRandString());
        processorConfig.setYieldDuration(GlobalOperations.getRandString());
        processorConfig.setBulletinLevel(GlobalOperations.getRandString());
        processorConfig.setRunDurationMillis(GlobalOperations.getRandNum());
        processorConfig.setConcurrentlySchedulableTaskCount(GlobalOperations.getRandNum());
        return processorConfig.build();
    }

}