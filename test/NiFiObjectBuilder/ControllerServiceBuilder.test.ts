import {ControllerServiceBuilder} from "../../src/NiFiObjectBuilder/ControllerServiceBuilder/ControllerServiceBuilder";
import {ControllerService} from "../../src/NiFiObjects/ControllerService/ControllerService";
import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"


describe('ControllerService Test', () => {
    let controllerServiceBuilder: ControllerServiceBuilder;
    beforeEach(() => {
        controllerServiceBuilder = new ControllerServiceBuilder();

    });
    it('Check build returns ControllerService', () => {
        //Arrange

        //Act
        let result = controllerServiceBuilder.build();

        //Assert
        expect(result).to.be.instanceof(ControllerService, 'build() returns ControllerService');

    });
    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setId changes id',  () => {
            //Arrange
            controllerServiceBuilder.setId(generatedString);

            //Act
            let result = controllerServiceBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setName changes name',  () => {
            //Arrange
            controllerServiceBuilder.setName(generatedString);

            //Act
            let result = controllerServiceBuilder.build().getName();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setType changes type',  () => {
            //Arrange
            controllerServiceBuilder.setType(generatedString);

            //Act
            let result = controllerServiceBuilder.build().getType();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setState changes state',  () => {
            //Arrange
            controllerServiceBuilder.setState(generatedString);

            //Act
            let result = controllerServiceBuilder.build().getState();

            //Assert
            expect(result).to.equal(generatedString);
        });
    });

});
