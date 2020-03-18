import {RegistryBuilder} from "../../src/NiFiObjectBuilder/RegistryBuilder/RegistryBuilder";
import {Registry} from "../../src/NiFiObjects/Registry/Registry";
import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"



describe('RegistryBuilder Test', () => {
    let registryClientBuilder: RegistryBuilder;
    beforeEach(() => {
        registryClientBuilder = new RegistryBuilder();
    });

    it('Check build returns Label',  () => {
        //Arrange

        //Act
        let result = registryClientBuilder.build();

        //Assert
        expect(result).to.be.instanceof(Registry, 'build() returns Registry');

    });
    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setId changes id',  () => {
            //Arrange
            registryClientBuilder.setId(generatedString);

            //Act
            let result = registryClientBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setName changes name',  () => {
            //Arrange
            registryClientBuilder.setName(generatedString);

            //Act
            let result = registryClientBuilder.build().getName();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setDescription changes description',  () => {
            //Arrange
            registryClientBuilder.setDescription(generatedString);

            //Act
            let result = registryClientBuilder.build().getDescription();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setUri changes uri',  () => {
            //Arrange
            registryClientBuilder.setUri(generatedString);

            //Act
            let result = registryClientBuilder.build().getUri();

            //Assert
            expect(result).to.equal(generatedString);
        });
    });


});
