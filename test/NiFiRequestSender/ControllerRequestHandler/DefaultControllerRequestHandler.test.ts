import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {ControllerRequestHandler} from "../../../src/NiFiRequestSender/ControllerRequestHandler/ControllerRequestHandler";
import {DefaultControllerRequestHandler} from "../../../src/NiFiRequestSender/ControllerRequestHandler/DefaultControllerRequestHandler";
import {ControllerServiceGenerator} from "../../NiFiObjectGenerator/ControllerService/ControllerServiceGenerator";
import {RegistryClientEntityGenerator} from "../../NiFiObjectGenerator/Registry/RegistryClientEntityGenerator";
import {ReportingTaskGenerator} from "../../NiFiObjectGenerator/ReportingTaskGenerator";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultControllerRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let controllerRequestHandler: ControllerRequestHandler;

    before('init ControllerRequestHandler', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        controllerRequestHandler = new DefaultControllerRequestHandler(requestSender);
    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('createControllerService Test', () => {
        it('Sanity: Check createControllerService', async () => {
            //Arrange
            let controllerService = new ControllerServiceGenerator().generate();
            let response = {
                "component": {
                    id: controllerService.getId(),
                    name: controllerService.getName(),
                    type: controllerService.getType(),
                    state: controllerService.getType(),
                    properties: controllerService.getProperties(),
                    descriptors: controllerService.getDescriptors(),
                    validationErrors: controllerService.getDescriptors(),
                    bundle: controllerService.getBundle()
                }
            };

            //Act
            nock(mockUrl).persist().post(`/controller/controller-services`).reply(200, response);
            let responseControllerService = await controllerRequestHandler.createControllerService(controllerService);

            //Assert
            expect(responseControllerService.id).to.be.equal(controllerService.getId());
        });
    });

    describe('createRegistryClient Test', () => {
        it('Sanity: Check createRegistryClient', async () => {
            //Arrange
            let registryClientEntity = new RegistryClientEntityGenerator().generate();
            let response = {
                "revision": registryClientEntity.getRevision(),
                "id": registryClientEntity.getId(),
                "uri": registryClientEntity.getUri(),
                "position": registryClientEntity.getPosition(),
                "permission": registryClientEntity.getPermission(),
                "bulletins": registryClientEntity.getBulletins(),
                "disconnectedNodeAcknowledged": registryClientEntity.getDisconnectedNodeAcknowledged(),
                "component": registryClientEntity.getComponent()
            };


            //Act
            nock(mockUrl).persist().post(`/controller/registry-clients`).reply(200, response);
            let responseRegistryClientEntity = await controllerRequestHandler.createRegistryClient(registryClientEntity);

            //Assert
            expect(responseRegistryClientEntity.id).to.be.equal(registryClientEntity.getId());
        });
    });

    describe('createReportingTask Test', () => {
        it('Sanity: Check createReportingTask', async () => {
            //Arrange
            let reportingTask = new ReportingTaskGenerator().generate();
            let response = {
                "component": {
                    "id": reportingTask.getId(),
                    "name": reportingTask.getName(),
                    "type": reportingTask.getType(),
                    "bundle": reportingTask.getBundle(),
                    "state": reportingTask.getState(),
                    "comments": reportingTask.getComments(),
                    "schedulingPeriod": reportingTask.getSchedulingPeriod(),
                    "schedulingStrategy": reportingTask.getSchedulingStrategy()

                }
            };

            //Act
            nock(mockUrl).persist().post(`/controller/reporting-tasks`).reply(200, response);
            let responseReportingTask = await controllerRequestHandler.createReportingTask(reportingTask);

            //Assert
            expect(responseReportingTask.id).to.be.equal(reportingTask.getId());
        });

    });

    describe('deleteRegistryClient Test', () => {
        it('Sanity: Check deleteRegistryClient', async () => {
            //Arrange
            let registryClientEntity = new RegistryClientEntityGenerator().generate();
            let response = {
                "revision": registryClientEntity.getRevision(),
                "id": registryClientEntity.getId(),
                "uri": registryClientEntity.getUri(),
                "position": registryClientEntity.getPosition(),
                "permission": registryClientEntity.getPermission(),
                "bulletins": registryClientEntity.getBulletins(),
                "disconnectedNodeAcknowledged": registryClientEntity.getDisconnectedNodeAcknowledged(),
                "component": registryClientEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().delete(`/controller/registry-clients/${registryClientEntity.getId()}`).reply(200, response);
            let responseRegistryClientEntity = await controllerRequestHandler.deleteRegistryClient(registryClientEntity.getId());

            //Assert
            expect(responseRegistryClientEntity.id).to.be.equal(registryClientEntity.getId());
        });

    });

    describe('getRegistryClientById Test', () => {
        it('Sanity: Check getRegistryClientById', async () => {
            //Arrange
            let registryClientEntity = new RegistryClientEntityGenerator().generate();
            let response = {
                "revision": registryClientEntity.getRevision(),
                "id": registryClientEntity.getId(),
                "uri": registryClientEntity.getUri(),
                "position": registryClientEntity.getPosition(),
                "permission": registryClientEntity.getPermission(),
                "bulletins": registryClientEntity.getBulletins(),
                "disconnectedNodeAcknowledged": registryClientEntity.getDisconnectedNodeAcknowledged(),
                "component": registryClientEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().get(`/controller/registry-clients/${registryClientEntity.getId()}`).reply(200, response);
            let responseRegistryClientEntity = await controllerRequestHandler.getRegistryClientById(registryClientEntity.getId());

            //Assert
            expect(responseRegistryClientEntity.id).to.be.equal(registryClientEntity.getId());
        });

    });

    describe('getRegistries Test', () => {
        it('Sanity: Check getRegistries', async () => {
            //Arrange
            let registryClientEntity = new RegistryClientEntityGenerator().generate();
            let registries = [registryClientEntity];
            let response = {
                "registries": [{
                    "revision": registryClientEntity.getRevision(),
                    "id": registryClientEntity.getId(),
                    "uri": registryClientEntity.getUri(),
                    "position": registryClientEntity.getPosition(),
                    "permission": registryClientEntity.getPermission(),
                    "bulletins": registryClientEntity.getBulletins(),
                    "disconnectedNodeAcknowledged": registryClientEntity.getDisconnectedNodeAcknowledged(),
                    "component": registryClientEntity.getComponent()
                }]
            };

            //Act
            nock(mockUrl).persist().get(`/controller/registry-clients`).reply(200, response);
            let responseRegistryClientEntity = await controllerRequestHandler.getRegistries();

            //Assert
            expect(responseRegistryClientEntity).to.be.deep.equal(registries);
        });

    });

    describe('updateRegistryClient Test', () => {
        it('Sanity: Check updateRegistryClient', async () => {
            //Arrange
            let registryClientEntity = new RegistryClientEntityGenerator().generate();
            let response = {
                "revision": registryClientEntity.getRevision(),
                "id": registryClientEntity.getId(),
                "uri": registryClientEntity.getUri(),
                "position": registryClientEntity.getPosition(),
                "permission": registryClientEntity.getPermission(),
                "bulletins": registryClientEntity.getBulletins(),
                "disconnectedNodeAcknowledged": registryClientEntity.getDisconnectedNodeAcknowledged(),
                "component": registryClientEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().put(`/controller/registry-clients/${registryClientEntity.getId()}`).reply(200, response);
            let responseRegistryClientEntity = await controllerRequestHandler.updateRegistryClient(registryClientEntity.getId());

            //Assert
            expect(responseRegistryClientEntity.id).to.be.equal(registryClientEntity.getId());
        });

    });


});
