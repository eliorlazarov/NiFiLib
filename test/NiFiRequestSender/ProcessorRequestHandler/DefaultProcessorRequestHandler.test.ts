import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {GlobalOperations} from "../../globalOperations";
import {ProcessorRequestHandler} from "../../../src/NiFiRequestSender/ProcessorRequestHandler/ProcessorRequestHandler";
import {DefaultProcessorRequestHandler} from "../../../src/NiFiRequestSender/ProcessorRequestHandler/DefaultProcessorRequestHandler";
import {ProcessorEntity} from "../../../src/NiFiObjects/Processor/ProcessorEntity";
import {ProcessorEntityGenerator} from "../../NiFiObjectGenerator/Processor/ProcessorEntityGenerator";
import {RevisionType} from "../../../src/NiFiObjects/Types/RevisionType";
import {ProcessorDoesNotExistError} from "../../../src/errors/nifi/ProcessorDoesNotExistError";
import {ProcessorType} from "../../../src/NiFiObjects/Types/Processor/ProcessorType";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultProcessorRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let processorRequestHandler: ProcessorRequestHandler;
    let processorEntity: ProcessorEntity;
    let revision: RevisionType;

    before('init FlowRequestHandler', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        processorRequestHandler = new DefaultProcessorRequestHandler(requestSender);
        processorEntity = new ProcessorEntityGenerator().generate();
        revision = processorEntity.revision;

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('changeProcessorState Test', () => {
        it('Sanity: Check changeProcessorState', async () => {
            //Arrange
            let state = GlobalOperations.getRandString();
            let response = {
                "revision": revision,
                "id": processorEntity.getId(),
                "uri": processorEntity.getUri(),
                "position": processorEntity.getPosition(),
                "permissions": processorEntity.getPermissions(),
                "bulletins": processorEntity.getBulletins(),
                "disconnectedNodeAcknowledged": processorEntity.getDisconnectedNodeAcknowledged(),
                "component": processorEntity.getComponent(),
                "inputRequirements": processorEntity.getInputRequirements(),
                "status": processorEntity.getStatus(),
                "operatePermissions": processorEntity.getOperatePermissions()
            };

            //Act
            nock(mockUrl).persist().put(`/processors/${processorEntity.getId()}`).reply(200, response);
            let responseChangedProcessor = await processorRequestHandler.changeProcessorState(state, processorEntity.getId(), revision.version);

            //Assert
            expect(responseChangedProcessor.id).to.be.equal(response.id);
        });


    });

    describe('deleteProcessor Test', () => {
        it('Sanity: Check deleteProcessor', async () => {
            //Arrange
            let response = {
                "revision": revision,
                "id": processorEntity.getId(),
                "uri": processorEntity.getUri(),
                "position": processorEntity.getPosition(),
                "permissions": processorEntity.getPermissions(),
                "bulletins": processorEntity.getBulletins(),
                "disconnectedNodeAcknowledged": processorEntity.getDisconnectedNodeAcknowledged(),
                "component": processorEntity.getComponent(),
                "inputRequirements": processorEntity.getInputRequirements(),
                "status": processorEntity.getStatus(),
                "operatePermissions": processorEntity.getOperatePermissions()
            };

            //Act
            nock(mockUrl).persist().delete(`/processors/${processorEntity.getId()}?version=${revision.version}`).reply(200, response);
            let responseDeleteProcessor = await processorRequestHandler.deleteProcessor(processorEntity.getId(), revision.version);

            //Assert
            expect(responseDeleteProcessor.id).to.be.equal(response.id);
        });


        it('Check throws ProcessorDoesNotExist error for processor which does not exist for delete operation', async () => {
            //Arrange


            //Act
            nock(mockUrl).persist().delete(`/processors/${processorEntity.getId()}?version=${revision.version}`).reply(404, `Unable to find processor with id`);
            let responseDeleteProcessor = processorRequestHandler.deleteProcessor(processorEntity.getId(), revision.version);

            //Assert
            expect(responseDeleteProcessor).to.be.rejectedWith(ProcessorDoesNotExistError);
        });


    });

    describe('getProcessor Test', () => {
        it('Sanity: Check getProcessor', async () => {
            //Arrange
            let response = {
                revision: revision,
                "id": processorEntity.getId(),
                "uri": processorEntity.getUri(),
                "position": processorEntity.getPosition(),
                "permissions": processorEntity.getPermissions(),
                "bulletins": processorEntity.getBulletins(),
                "disconnectedNodeAcknowledged": processorEntity.getDisconnectedNodeAcknowledged(),
                "component": processorEntity.getComponent(),
                "inputRequirements": processorEntity.getInputRequirements(),
                "status": processorEntity.getStatus(),
                "operatePermissions": processorEntity.getOperatePermissions()
            };

            //Act
            nock(mockUrl).persist().get(`/processors/${processorEntity.getId()}`).reply(200, response);
            let responseProcessor = await processorRequestHandler.getProcessor(processorEntity.getId());

            //Assert
            expect(responseProcessor.id).to.be.equal(response.id);
        });


    });

    describe('resetProcessorState Test', () => {
        it('Sanity: Check getProcessor', async () => {
            //Arrange
            let response = {
                revision: revision,
                "id": processorEntity.getId(),
                "uri": processorEntity.getUri(),
                "position": processorEntity.getPosition(),
                "permissions": processorEntity.getPermissions(),
                "bulletins": processorEntity.getBulletins(),
                "disconnectedNodeAcknowledged": processorEntity.getDisconnectedNodeAcknowledged(),
                "component": processorEntity.getComponent(),
                "inputRequirements": processorEntity.getInputRequirements(),
                "status": processorEntity.getStatus(),
                "operatePermissions": processorEntity.getOperatePermissions()
            };

            //Act
            nock(mockUrl).persist().post(`/processors/${processorEntity.getId()}/state/clear-requests`).reply(200, response);
            let responseProcessor = await processorRequestHandler.resetProcessorState(processorEntity.getId());

            //Assert
            expect(responseProcessor.id).to.be.equal(response.id);
        });


    });

    describe('updateProcessor Test', () => {
        it('Sanity: Check updateProcessor', async () => {
            //Arrange
            let processor: ProcessorType = processorEntity.getComponent();
            let response = {
                revision: revision,
                "id": processorEntity.getId(),
                "uri": processorEntity.getUri(),
                "position": processorEntity.getPosition(),
                "permissions": processorEntity.getPermissions(),
                "bulletins": processorEntity.getBulletins(),
                "disconnectedNodeAcknowledged": processorEntity.getDisconnectedNodeAcknowledged(),
                "component": processorEntity.getComponent(),
                "inputRequirements": processorEntity.getInputRequirements(),
                "status": processorEntity.getStatus(),
                "operatePermissions": processorEntity.getOperatePermissions()
            };

            //Act
            nock(mockUrl).persist().put(`/processors/${processorEntity.getId()}`).reply(200, response);
            let responseUpdatedProcessor = await processorRequestHandler.updateProcessor(processorEntity.getId(), processor.config, processorEntity.getPosition(), revision.version);

            //Assert
            expect(responseUpdatedProcessor.id).to.be.equal(response.id);
        });


    });


});
