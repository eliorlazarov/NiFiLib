import {RegistryBuilder} from "../../src/NiFiObjectBuilder/RegistryBuilder/RegistryBuilder";
import {Registry} from "../../src/NiFiObjects/Registry/Registry";
import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"
import {RegistryClientEntityBuilder} from "../../src/NiFiObjectBuilder/RegistryBuilder/RegistryClientEntityBuilder";
import {RegistryClientEntity} from "../../src/NiFiObjects/Registry/RegistryClientEntity";
import {Revision} from "../../src/NiFiObjects/Revision";
import {RevisionGenerator} from "../NiFiObjectGenerator/RevisionGenerator";
import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {PermissionGenerator} from "../NiFiObjectGenerator/PermissionGenerator";
import {RegistryGenerator} from "../NiFiObjectGenerator/Registry/RegistryGenerator";


describe('RegistryClientEntityBuilder Test', () => {
    let registryClientEntityBuilder: RegistryClientEntityBuilder;
    beforeEach(() => {
        registryClientEntityBuilder = new RegistryClientEntityBuilder();
    });

    it('Check build returns RegistryClientEntity', () => {
        //Arrange

        //Act
        let result = registryClientEntityBuilder.build();

        //Assert
        expect(result).to.be.instanceof(RegistryClientEntity, 'build() returns RegistryClientEntity');

    });
    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setId changes id', () => {
            //Arrange
            registryClientEntityBuilder.setId(generatedString);

            //Act
            let result = registryClientEntityBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setUri changes uri', () => {
            //Arrange
            registryClientEntityBuilder.setUri(generatedString);

            //Act
            let result = registryClientEntityBuilder.build().getUri();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });

    it('Check setRevision changes revision', () => {
        //Arrange
        let revision = new RevisionGenerator().generate();
        registryClientEntityBuilder.setRevision(revision);

        //Act
        let result = registryClientEntityBuilder.build().getRevision();

        //Assert
        expect(result).to.equal(revision);
    });

    it('Check setPosition changes position', () => {
        //Arrange
        let position = new PositionGenerator().generate();
        registryClientEntityBuilder.setPosition(position);

        //Act
        let result = registryClientEntityBuilder.build().getPosition();

        //Assert
        expect(result).to.equal(position);
    });

    it('Check setPermission changes permission', () => {
        //Arrange
        let permission = new PermissionGenerator().generate();
        registryClientEntityBuilder.setPermission(permission);

        //Act
        let result = registryClientEntityBuilder.build().getPermission();

        //Assert
        expect(result).to.equal(permission);
    });

    it('Check setComponent changes registry component', () => {
        //Arrange
        let component = new RegistryGenerator().generate();
        registryClientEntityBuilder.setComponent(component);

        //Act
        let result = registryClientEntityBuilder.build().getComponent();

        //Assert
        expect(result).to.equal(component);
    });

    it('Check setDisconnectedNodeAcknowledged changes disconnectedNodeAcknowledged',  () => {
        //Arrange
        let disconnectedNodeAcknowledged = GlobalOperations.getRandBoolean();
        registryClientEntityBuilder.setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged);

        //Act
        let result = registryClientEntityBuilder.build().getDisconnectedNodeAcknowledged();

        //Assert
        expect(result).to.equal(disconnectedNodeAcknowledged);

    });

    it('Check setBulletins changes bulletins',  () => {
        //Arrange
        let bulletinsCount = GlobalOperations.getRandNum();

        let bulletins = [];
        for (let index = 0; index < bulletinsCount; index++) {
            bulletins.push({});
        }

        registryClientEntityBuilder.setBulletins(bulletins);

        //Act
        let result = registryClientEntityBuilder.build().getBulletins();

        //Assert
        expect(result).to.equal(bulletins);

    });


});
