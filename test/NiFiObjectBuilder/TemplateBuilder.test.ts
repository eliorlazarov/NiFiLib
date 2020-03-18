import {TemplateBuilder} from "../../src/NiFiObjectBuilder/TemplateBuilder";
import {Template} from "../../src/NiFiObjects/Template";
import {expect} from "chai"
import {GlobalOperations} from "../globalOperations";


describe('TemplateBuilder Test', () => {
    let templateBuilder: TemplateBuilder;
    beforeEach(() => {
        templateBuilder = new TemplateBuilder();
    });

    it('Check build returns Template',  () => {
        //Arrange

        //Act
        let result = templateBuilder.build();

        //Assert
        expect(result).to.be.instanceof(Template, 'build() returns Template');

    });
    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setUri changes uri',  () => {
            //Arrange
            templateBuilder.setUri(generatedString);

            //Act
            let result = templateBuilder.build().getUri();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setId changes id',  () => {
            //Arrange
            templateBuilder.setId(generatedString);

            //Act
            let result = templateBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setGroupId changes groupId',  () => {
            //Arrange
            templateBuilder.setGroupId(generatedString);

            //Act
            let result = templateBuilder.build().getGroupId();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setName changes name',  () => {
            //Arrange
            templateBuilder.setName(generatedString);

            //Act
            let result = templateBuilder.build().getName();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setDescription changes description',  () => {
            //Arrange
            templateBuilder.setDescription(generatedString);

            //Act
            let result = templateBuilder.build().getDescription();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setTimestamp changes timestamp',  () => {
            //Arrange
            templateBuilder.setTimestamp(generatedString);

            //Act
            let result = templateBuilder.build().getTimestamp();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setEncodingVersion changes encodingVersion',  () => {
            //Arrange
            templateBuilder.setEncodingVersion(generatedString);

            //Act
            let result = templateBuilder.build().getEncodingVersion();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });


});
