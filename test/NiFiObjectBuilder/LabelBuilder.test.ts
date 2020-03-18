import {LabelBuilder} from "../../src/NiFiObjectBuilder/LabelBuilder/LabelBuilder";
import {Label} from "../../src/NiFiObjects/Label/Label";
import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {expect} from "chai"
import {GlobalOperations} from "../globalOperations";


describe('LabelBuilder Test', () => {
    let labelBuilder: LabelBuilder;
    beforeEach(() => {
        labelBuilder = new LabelBuilder();
    });

    it('Check build returns Label',  () => {
        //Arrange

        //Act
        let result = labelBuilder.build();

        //Assert
        expect(result).to.be.instanceof(Label, 'build() returns Label');

    });

    it('Check setPosition changes position',  () => {
        //Arrange
        let position = new PositionGenerator().generate();
        labelBuilder.setPosition(position);

        //Act
        let result = labelBuilder.build().getPosition();

        //Assert
        expect(result).to.equal(position);
    });

    //Todo: add check change style object

    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setLabel changes label',  () => {
            //Arrange
            labelBuilder.setLabel(generatedString);

            //Act
            let result = labelBuilder.build().getLabel();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setParentGroupId changes parentGroupId', () => {
            //Arrange
            labelBuilder.setParentGroupId(generatedString);

            //Act
            let result = labelBuilder.build().getParentGroupId();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setVersionedComponentId changes versionedComponentId', () => {
            //Arrange
            labelBuilder.setVersionedComponentId(generatedString);

            //Act
            let result = labelBuilder.build().getVersionedComponentId();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });


});
