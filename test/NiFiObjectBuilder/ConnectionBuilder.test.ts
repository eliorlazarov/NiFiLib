import {ConnectionBuilder} from "../../src/NiFiObjectBuilder/ConnectionBuilder/ConnectionBuilder";
import {Connection} from "../../src/NiFiObjects/Connection/Connection";
import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {ConnectableGenerator} from "../NiFiObjectGenerator/Connection/ConnectableGenerator";
import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"


describe('ConnectionBuilder Test', () => {
    let connectionBuilder: ConnectionBuilder;
    beforeEach(() => {
        connectionBuilder = new ConnectionBuilder();
    });

    it('Check build returns Connection', () => {
        //Arrange

        //Act
        let result = connectionBuilder.build();

        //Assert
        expect(result).to.be.instanceof(Connection, 'build() returns Connection');

    });



    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setName changes name', () => {
            //Arrange
            connectionBuilder.setName(generatedString);

            //Act
            let result = connectionBuilder.build().getName();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setParentGroupId changes parentGroupId', () => {
            //Arrange
            connectionBuilder.setParentGroupId(generatedString);

            //Act
            let result = connectionBuilder.build().getParentGroupId();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setVersionComponentId changes versionComponentId', () => {
            //Arrange
            connectionBuilder.setVersionComponentId(generatedString);

            //Act
            let result = connectionBuilder.build().getVersionComponentId();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });

    it('Check setPosition changes position', () => {
        //Arrange
        let position = new PositionGenerator().generate();
        connectionBuilder.setPosition(position);

        //Act
        let result = connectionBuilder.build().getPosition();

        //Assert
        expect(result).to.equal(position);
    });

    it('Check setSource changes source', () => {
        //Arrange
        let connectable = new ConnectableGenerator().generate();
        connectionBuilder.setSource(connectable);

        //Act
        let result = connectionBuilder.build().getSource();

        //Assert
        expect(result).to.equal(connectable);

    });

    it('Check setDestination changes destination', () => {
        //Arrange
        let connectable = new ConnectableGenerator().generate();
        connectionBuilder.setDestination(connectable);

        //Act
        let result = connectionBuilder.build().getDestination();

        //Assert
        expect(result).to.equal(connectable);

    });


});
