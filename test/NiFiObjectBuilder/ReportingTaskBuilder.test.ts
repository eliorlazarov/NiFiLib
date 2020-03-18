import {GlobalOperations} from "../globalOperations";
import {expect} from "chai"
import {ReportingTaskBuilder} from "../../src/NiFiObjectBuilder/ReportingTaskBuilder";
import {BundleGenerator} from "../NiFiObjectGenerator/BundleGenerator";
import {ReportingTask} from "../../src/NiFiObjects/ReportingTask";


describe('ReportingTaskBuilder Test', () => {
    let reportingTaskBuilder: ReportingTaskBuilder;
    beforeEach(() => {
        reportingTaskBuilder = new ReportingTaskBuilder();
    });

    it('Check build returns ReportingTask', () => {
        //Arrange

        //Act
        let result = reportingTaskBuilder.build();

        //Assert
        expect(result).to.be.instanceof(ReportingTask, 'build() returns ReportingTask');

    });

    it('Check setBundle changes bundle', () => {
        //Arrange
        let bundle = new BundleGenerator().generate();
        reportingTaskBuilder.setBundle(bundle);
        //Act
        let result = reportingTaskBuilder.build().getBundle();

        //Assert
        expect(result).to.be.equal(bundle);

    });


    describe('Check string attributes', () => {
        let generatedString: string;
        beforeEach(() => {
            generatedString = GlobalOperations.getRandString();
        });

        it('Check setId changes id', () => {
            //Arrange
            reportingTaskBuilder.setId(generatedString);

            //Act
            let result = reportingTaskBuilder.build().getId();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setName changes name', () => {
            //Arrange
            reportingTaskBuilder.setName(generatedString);

            //Act
            let result = reportingTaskBuilder.build().getName();

            //Assert
            expect(result).to.equal(generatedString);
        });


        it('Check setType changes type', () => {
            //Arrange
            reportingTaskBuilder.setType(generatedString);

            //Act
            let result = reportingTaskBuilder.build().getType();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setState changes state', () => {
            //Arrange
            reportingTaskBuilder.setState(generatedString);

            //Act
            let result = reportingTaskBuilder.build().getState();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setComments changes comments', () => {
            //Arrange
            reportingTaskBuilder.setComments(generatedString);

            //Act
            let result = reportingTaskBuilder.build().getComments();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setSchedulingPeriod changes schedulingPeriod', () => {
            //Arrange
            reportingTaskBuilder.setSchedulingPeriod(generatedString);

            //Act
            let result = reportingTaskBuilder.build().getSchedulingPeriod();

            //Assert
            expect(result).to.equal(generatedString);
        });

        it('Check setSchedulingStrategy changes schedulingStrategy', () => {
            //Arrange
            reportingTaskBuilder.setSchedulingStrategy(generatedString);

            //Act
            let result = reportingTaskBuilder.build().getSchedulingStrategy();

            //Assert
            expect(result).to.equal(generatedString);
        });

    });


});
