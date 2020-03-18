import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"
import {SnippetBuilder} from "../../src/NiFiObjectBuilder/SnippetBuilder";
import {Snippet} from "../../src/NiFiObjects/Snippet";


describe('SnippetBuilder Test', () => {
    let snippetBuilder: SnippetBuilder;
    beforeEach(() => {
        snippetBuilder = new SnippetBuilder();
    });

    it('Check build returns Snippet', () => {
        //Arrange

        //Act
        let result = snippetBuilder.build();

        //Assert
        expect(result).to.be.instanceof(Snippet, 'build() returns Snippet');

    });


    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setId changes id', () => {
            //Arrange
            snippetBuilder.setId(generatedString);

            //Act
            let result = snippetBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setUri changes uri', () => {
            //Arrange
            snippetBuilder.setUri(generatedString);

            //Act
            let result = snippetBuilder.build().getUri();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setParentGroupId changes type', () => {
            //Arrange
            snippetBuilder.setParentGroupId(generatedString);

            //Act
            let result = snippetBuilder.build().getParentGroupId();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });

    describe('Check objects attributes', () => {
        let generatedObject: object;
        beforeEach(() => {
            generatedObject = {};
        });

        it('Check setProcessGroups changes processGroups', () => {
            //Arrange
            snippetBuilder.setProcessGroups(generatedObject);

            //Act
            let result = snippetBuilder.build().getProcessGroups();

            //Assert
            expect(result).to.equal(generatedObject);
        });

        it('Check setRemoteProcessGroups changes remoteProcessGroups', () => {
            //Arrange
            snippetBuilder.setRemoteProcessGroups(generatedObject);

            //Act
            let result = snippetBuilder.build().getRemoteProcessGroups();

            //Assert
            expect(result).to.equal(generatedObject);
        });


        it('Check setProcessors changes processors', () => {
            //Arrange
            snippetBuilder.setProcessors(generatedObject);

            //Act
            let result = snippetBuilder.build().getProcessors();

            //Assert
            expect(result).to.equal(generatedObject);
        });


        it('Check setInputPorts changes inputPorts', () => {
            //Arrange
            snippetBuilder.setInputPorts(generatedObject);

            //Act
            let result = snippetBuilder.build().getInputPorts();

            //Assert
            expect(result).to.equal(generatedObject);
        });

        it('Check setOutputPorts changes outputPorts', () => {
            //Arrange
            snippetBuilder.setOutputPorts(generatedObject);

            //Act
            let result = snippetBuilder.build().getOutputPorts();

            //Assert
            expect(result).to.equal(generatedObject);
        });

        it('Check setConnections changes connections', () => {
            //Arrange
            snippetBuilder.setConnections(generatedObject);

            //Act
            let result = snippetBuilder.build().getConnections();

            //Assert
            expect(result).to.equal(generatedObject);
        });

        it('Check setLabels changes labels', () => {
            //Arrange
            snippetBuilder.setLabels(generatedObject);

            //Act
            let result = snippetBuilder.build().getLabels();

            //Assert
            expect(result).to.equal(generatedObject);
        });

        it('Check setFunnels changes funnels', () => {
            //Arrange
            snippetBuilder.setFunnels(generatedObject);

            //Act
            let result = snippetBuilder.build().getFunnels();

            //Assert
            expect(result).to.equal(generatedObject);
        });

    });


});
