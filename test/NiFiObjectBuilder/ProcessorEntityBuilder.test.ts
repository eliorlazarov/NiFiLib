import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {ProcessorEntityBuilder} from "../../src/NiFiObjectBuilder/ProcessorBuilder/ProcessorEntityBuilder";
import {ProcessorEntity} from "../../src/NiFiObjects/Processor/ProcessorEntity";
import {RevisionGenerator} from "../NiFiObjectGenerator/RevisionGenerator";
import {GlobalOperations} from "../globalOperations";
import {PermissionGenerator} from "../NiFiObjectGenerator/PermissionGenerator";
import {ProcessorGenerator} from "../NiFiObjectGenerator/Processor/ProcessorGenerator";
import {Permission} from "../../src/NiFiObjects/Permission";
import {expect} from "chai"


describe('ProcessorEntityBuilder Test', () => {
    let processorEntityBuilder: ProcessorEntityBuilder;
    beforeEach(() => {
        processorEntityBuilder = new ProcessorEntityBuilder();
    });

    it('Check build returns ProcessorEntity',  () => {
        //Arrange

        //Act
        let result = processorEntityBuilder.build();

        //Assert
        expect(result).to.be.instanceof(ProcessorEntity, 'build() returns ProcessorEntity');

    });

    it('Check setRevision changes revision',  () => {
        //Arrange
        let revision = new RevisionGenerator().generate();
        processorEntityBuilder.setRevision(revision);

        //Act
        let result = processorEntityBuilder.build().getRevision();

        //Assert
        expect(result).to.equal(revision);
    });


    describe('check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setId changes id',  () => {
            //Arrange
            let id = generatedString;
            processorEntityBuilder.setId(id);

            //Act
            let result = processorEntityBuilder.build().getId();

            //Assert
            expect(result).to.equal(id);
        });

        it('Check setUri changes uri',  () => {
            //Arrange
            let uri = generatedString;
            processorEntityBuilder.setUri(uri);

            //Act
            let result = processorEntityBuilder.build().getUri();

            //Assert
            expect(result).to.equal(uri);
        });

        it('Check setInputRequirements changes inputRequirements',  () => {
            //Arrange
            let inputRequirements = generatedString;
            processorEntityBuilder.setInputRequirements(inputRequirements);

            //Act
            let result = processorEntityBuilder.build().getInputRequirements();

            //Assert
            expect(result).to.equal(inputRequirements);

        });
    });

    describe('check Objects attributes', () => {
        let generatedObject: object;
        beforeEach(() => {
            generatedObject = {};
        });

        it('Check setBulletins changes bulletins',  () => {
            //Arrange
            let bulletinsCount = GlobalOperations.getRandNum();

            let bulletins = [];
            for (let index = 0; index < bulletinsCount; index++) {
                bulletins.push(generatedObject);
            }

            processorEntityBuilder.setBulletins(bulletins);

            //Act
            let result = processorEntityBuilder.build().getBulletins();

            //Assert
            expect(result).to.equal(bulletins);

        });

        it('Check setStatus changes status',  () => {
            //Arrange
            let status = generatedObject;
            processorEntityBuilder.setStatus(status);

            //Act
            let result = processorEntityBuilder.build().getStatus();

            //Assert
            expect(result).to.equal(status);

        });

    });

    describe('check Permissions attributes', () => {
        let generatedPermissions: Permission;
        beforeEach(() => {
            generatedPermissions = new PermissionGenerator().generate();
        });

        it('Check setPermissions changes permissions',  () => {
            //Arrange
            let permissions = generatedPermissions;
            processorEntityBuilder.setPermissions(permissions);

            //Act
            let result = processorEntityBuilder.build().getPermissions();

            //Assert
            expect(result).to.equal(permissions);

        });

        it('Check setOperatePermissions changes operatePermissions',  () => {
            //Arrange
            let operatePermissions = generatedPermissions;
            processorEntityBuilder.setOperatePermissions(operatePermissions);

            //Act
            let result = processorEntityBuilder.build().getOperatePermissions();

            //Assert
            expect(result).to.equal(operatePermissions);

        });

    });

    it('Check setPosition changes position',  () => {
        //Arrange
        let position = new PositionGenerator().generate();
        processorEntityBuilder.setPosition(position);

        //Act
        let result = processorEntityBuilder.build().getPosition();

        //Assert
        expect(result).to.equal(position);
    });

    it('Check setDisconnectedNodeAcknowledged changes disconnectedNodeAcknowledged',  () => {
        //Arrange
        let disconnectedNodeAcknowledged = GlobalOperations.getRandBoolean();
        processorEntityBuilder.setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged);

        //Act
        let result = processorEntityBuilder.build().getDisconnectedNodeAcknowledged();

        //Assert
        expect(result).to.equal(disconnectedNodeAcknowledged);

    });

    it('Check setComponent changes component',  () => {
        //Arrange
        let component = new ProcessorGenerator().generate();
        processorEntityBuilder.setComponent(component);

        //Act
        let result = processorEntityBuilder.build().getComponent();

        //Assert
        expect(result).to.equal(component);

    });

});
