import {PositionGenerator} from "../NiFiObjectGenerator/PositionGenerator";
import {expect} from "chai"
import {ProcessGroupBuilder} from "../../src/NiFiObjectBuilder/ProcessGroupBuilder/ProcessGroupBuilder";
import {ProcessGroup} from "../../src/NiFiObjects/ProcessGroup/ProcessGroup";
import {Position} from "../../src/NiFiObjects/Position";
import {GlobalOperations} from "../globalOperations";
import {FlowSnippet} from "../../src/NiFiObjects/Flow/FlowSnippet";
import {FlowSnippetGenerator} from "../NiFiObjectGenerator/Flow/FlowSnippetGenerator";


describe('ProcessGroupBuilder Test', () => {
    let processGroupBuilder: ProcessGroupBuilder;
    beforeEach(() => {
        processGroupBuilder = new ProcessGroupBuilder();
    });

    it('Check build returns ProcessGroup', () => {
        //Arrange

        //Act
        let result = processGroupBuilder.build();

        //Assert
        expect(result).to.be.instanceof(ProcessGroup, 'build() returns ProcessGroup');

    });

    it('Check setPosition changes position', () => {
        //Arrange
        let position: Position = new PositionGenerator().generate();
        processGroupBuilder.setPosition(position);

        //Act
        let result = processGroupBuilder.build().getPosition();

        //Assert
        expect(result).to.equal(position);
    });


    it('Check setName changes name', () => {
        //Arrange
        let generatedString: string = GlobalOperations.getRandString();
        processGroupBuilder.setName(generatedString);

        //Act
        let result = processGroupBuilder.build().getName();

        //Assert
        expect(result).to.equal(generatedString);
    });


    it('Check setContents changes contents', () => {
        //Arrange
        let flowSnippet: FlowSnippet = new FlowSnippetGenerator().generate();
        processGroupBuilder.setContents(flowSnippet);

        //Act
        let result = processGroupBuilder.build().getContents();

        //Assert
        expect(result).to.equal(flowSnippet);
    });


});
