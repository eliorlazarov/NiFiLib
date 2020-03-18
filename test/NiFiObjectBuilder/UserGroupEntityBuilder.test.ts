import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"
import {RevisionGenerator} from "../NiFiObjectGenerator/RevisionGenerator";
import {PermissionGenerator} from "../NiFiObjectGenerator/PermissionGenerator";
import {UserGroupEntityBuilder} from "../../src/NiFiObjectBuilder/SecureBuilders/UserGroupBuilder/UserGroupEntityBuilder";
import {UserGroupEntity} from "../../src/NiFiObjects/SecureObjects/UserGroup/UserGroupEntity";
import {UserGroupGenerator} from "../NiFiObjectGenerator/SecureGenerators/UserGroup/UserGroupGenerator";


describe('UserGroupEntityBuilder Test', () => {
    let userGroupEntityBuilder: UserGroupEntityBuilder;
    beforeEach(() => {
        userGroupEntityBuilder = new UserGroupEntityBuilder();
    });

    it('Check build returns UserGroupEntity', () => {
        //Arrange

        //Act
        let result = userGroupEntityBuilder.build();

        //Assert
        expect(result).to.be.instanceof(UserGroupEntity, 'build() returns UserGroupEntity');

    });

    it('Check setRevision changes revision', () => {
        //Arrange
        let revision = new RevisionGenerator().generate();
        userGroupEntityBuilder.setRevision(revision);
        //Act
        let result = userGroupEntityBuilder.build().getRevision();

        //Assert
        expect(result).to.be.equal(revision);

    });

    it('Check setPosition changes position', () => {
        //Arrange
        let position = new PositionGenerator().generate();
        userGroupEntityBuilder.setPosition(position);
        //Act
        let result = userGroupEntityBuilder.build().getPosition();

        //Assert
        expect(result).to.be.equal(position);
    });

    it('Check setPermissions changes permissions', () => {
        //Arrange
        let permissions = new PermissionGenerator().generate();
        userGroupEntityBuilder.setPermissions(permissions);
        //Act
        let result = userGroupEntityBuilder.build().getPermissions();

        //Assert
        expect(result).to.be.equal(permissions);

    });

    it('Check setDisconnectedNodeAcknowledged changes disconnectedNodeAcknowledged', () => {
        //Arrange
        let disconnectedNodeAcknowledged = GlobalOperations.getRandBoolean();
        userGroupEntityBuilder.setDisconnectedNodeAcknowledged(disconnectedNodeAcknowledged);

        //Act
        let result = userGroupEntityBuilder.build().getDisconnectedNodeAcknowledged();

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
            userGroupEntityBuilder.setId(generatedString);

            //Act
            let result = userGroupEntityBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setUri changes uri', () => {
            //Arrange
            userGroupEntityBuilder.setUri(generatedString);

            //Act
            let result = userGroupEntityBuilder.build().getUri();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });

    it('Check setComponent changes UserGroup', () => {
        //Arrange
        let component = new UserGroupGenerator().generate();
        userGroupEntityBuilder.setComponent(component);

        //Act
        let result = userGroupEntityBuilder.build().getComponent();

        //Assert
        expect(result).to.equal(component);
    });


});
