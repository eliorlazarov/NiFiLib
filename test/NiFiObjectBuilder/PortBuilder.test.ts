import {PortBuilder} from "../../src/NiFiObjectBuilder/PortBuilder/PortBuilder";
import {Port} from "../../src/NiFiObjects/Port/Port";
import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {expect} from "chai"
import {GlobalOperations} from "../globalOperations";


describe('PortBuilder Test', () => {
    let portBuilder: PortBuilder;
    beforeEach(() => {
        portBuilder = new PortBuilder();
    });

    it('Check build returns Port',  () => {
        //Arrange

        //Act
        let result = portBuilder.build();

        //Assert
        expect(result).to.be.instanceof(Port, 'build() returns Port');

    });

    it('Check setPosition changes position',  () => {
        //Arrange
        let position = new PositionGenerator().generate();
        portBuilder.setPosition(position);

        //Act
        let result = portBuilder.build().getPosition();

        //Assert
        expect(result).to.equal(position);
    });
    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setName changes name',  () => {
            //Arrange
            portBuilder.setName(generatedString);

            //Act
            let result = portBuilder.build().getName();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setType changes type',  () => {
            //Arrange
            portBuilder.setType(generatedString);

            //Act
            let result = portBuilder.build().getType();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setState changes state',  () => {
            //Arrange
            portBuilder.setState(generatedString);

            //Act
            let result = portBuilder.build().getState();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });

});
