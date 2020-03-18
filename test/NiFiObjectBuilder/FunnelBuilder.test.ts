import {FunnelBuilder} from "../../src/NiFiObjectBuilder/FunnelBuilder/FunnelBuilder";
import {Funnel} from "../../src/NiFiObjects/Funnel/Funnel";
import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"


describe('FunnelBuilder Test', () => {
    let funnelBuilder: FunnelBuilder;
    beforeEach(() => {
        funnelBuilder = new FunnelBuilder();
    });

    it('Check build returns Funnel', async () => {
        //Arrange

        //Act
        let result = funnelBuilder.build();

        //Assert
        expect(result).to.be.instanceof(Funnel, 'build() returns Funnel');

    });

    it('Check setId changes id', async () => {
        //Arrange
        let generatedString = GlobalOperations.getRandString();
        funnelBuilder.setId(generatedString);

        //Act
        let result = funnelBuilder.build().getId();

        //Assert
        expect(result).to.equal(generatedString);
    });

    it('Check setPosition changes position', async () => {
        //Arrange
        let position = new PositionGenerator().generate();
        funnelBuilder.setPosition(position);

        //Act
        let result = funnelBuilder.build().getPosition();

        //Assert
        expect(result).to.equal(position);
    });

    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setParentGroupId changes parentGroupId', () => {
            //Arrange
            funnelBuilder.setParentGroupId(generatedString);

            //Act
            let result = funnelBuilder.build().getParentGroupId();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setVersionedComponentId changes versionedComponentId', () => {
            //Arrange
            funnelBuilder.setVersionedComponentId(generatedString);

            //Act
            let result = funnelBuilder.build().getVersionedComponentId();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });

});
