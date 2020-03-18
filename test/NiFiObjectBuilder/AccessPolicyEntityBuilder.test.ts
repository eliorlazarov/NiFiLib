import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"
import {AccessPolicyEntityBuilder} from "../../src/NiFiObjectBuilder/SecureBuilders/AccessPolicyBuilder/AccessPolicyEntityBuilder";
import {AccessPolicyEntity} from "../../src/NiFiObjects/SecureObjects/AccessPolicy/AccessPolicyEntity";
import {RevisionGenerator} from "../NiFiObjectGenerator/RevisionGenerator";
import {PermissionGenerator} from "../NiFiObjectGenerator/PermissionGenerator";


describe('AccessPolicyEntityBuilder Test', () => {
    let accessPolicyEntityBuilder: AccessPolicyEntityBuilder;
    beforeEach(() => {
        accessPolicyEntityBuilder = new AccessPolicyEntityBuilder();
    });

    it('Check build returns AccessPolicyEntity', () => {
        //Arrange

        //Act
        let result = accessPolicyEntityBuilder.build();

        //Assert
        expect(result).to.be.instanceof(AccessPolicyEntity, 'build() returns AccessPolicyEntity');

    });

    it('Check setRevision changes revision', () => {
        //Arrange
        let revision = new RevisionGenerator().generate();
        accessPolicyEntityBuilder.setRevision(revision);
        //Act
        let result = accessPolicyEntityBuilder.build().getRevision();

        //Assert
        expect(result).to.be.equal(revision);

    });

    it('Check setPosition changes position', () => {
        //Arrange
        let position = new PositionGenerator().generate();
        accessPolicyEntityBuilder.setPosition(position);
        //Act
        let result = accessPolicyEntityBuilder.build().getPosition();

        //Assert
        expect(result).to.be.equal(position);
    });

    it('Check setPermissions changes permissions', () => {
        //Arrange
        let permissions = new PermissionGenerator().generate();
        accessPolicyEntityBuilder.setPermissions(permissions);
        //Act
        let result = accessPolicyEntityBuilder.build().getPermissions();

        //Assert
        expect(result).to.be.equal(permissions);

    });

    it('Check setDisconnectedNodeAcknowledged changes disconnectedNodeAcknowledged',  () => {
        //Arrange
        let disconnectedNodeAcknowledged = GlobalOperations.getRandBoolean();
        accessPolicyEntityBuilder.setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged);

        //Act
        let result = accessPolicyEntityBuilder.build().getDisconnectedNodeAcknowledged();

        //Assert
        expect(result).to.equal(disconnectedNodeAcknowledged);

    });

    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setId changes id', () => {
            //Arrange
            accessPolicyEntityBuilder.setId(generatedString);

            //Act
            let result = accessPolicyEntityBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setUri changes uri', () => {
            //Arrange
            accessPolicyEntityBuilder.setUri(generatedString);

            //Act
            let result = accessPolicyEntityBuilder.build().getUri();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setGenerated changes generated', () => {
            //Arrange
            accessPolicyEntityBuilder.setGenerated(generatedString);

            //Act
            let result = accessPolicyEntityBuilder.build().getGenerated();

            //Assert
            expect(result).to.equal(generatedString);
        });


    });


});
