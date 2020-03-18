import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {ControllerServiceRequestHandler} from "../../../src/NiFiRequestSender/ControllerSerivceRequestHandler/ControllerServiceRequestHandler";
import {DefaultControllerServiceRequestHandler} from "../../../src/NiFiRequestSender/ControllerSerivceRequestHandler/DefaultControllerServiceRequestHandler";
import {ControllerServiceEntityGenerator} from "../../NiFiObjectGenerator/ControllerService/ControllerServiceEntityGenerator";
import {RevisionType} from "../../../src/NiFiObjects/Types/RevisionType";
import {ControllerServiceType} from "../../../src/NiFiObjects/Types/ControllerService/ControllerServiceType";
import {ControllerServiceEntity} from "../../../src/NiFiObjects/ControllerService/ControllerServiceEntity";
import {ControllerServiceDoesNotExistsError} from "../../../src/errors/nifi/ControllerServiceDoesNotExistsError";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultControllerRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let controllerServiceRequestHandler: ControllerServiceRequestHandler;
    let revision: RevisionType;
    let component: ControllerServiceType;
    let controllerServiceEntity: ControllerServiceEntity;

    before('init ControllerServiceRequestHandler', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        controllerServiceRequestHandler = new DefaultControllerServiceRequestHandler(requestSender);
        controllerServiceEntity = new ControllerServiceEntityGenerator().generate();
        component = controllerServiceEntity.getComponent();
        revision = controllerServiceEntity.getRevision();
    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('deleteControllerService Test', () => {
        it('Sanity: Check deleteControllerService', async () => {
            //Arrange
            let response = {
                "component": component,
                "revision": revision
            };

            //Act
            nock(mockUrl).persist().delete(`/controller-service/${component.id}?version=${revision.version}`).reply(200, response);
            let responseControllerService = await controllerServiceRequestHandler.deleteControllerService(component.id, revision.version);

            //Assert
            expect(responseControllerService.component.id).to.be.equal(controllerServiceEntity.component.id);
        });

        it('Check throws ControllerServiceDoesNotExist error for controller service which does not exist for delete operation', async () => {
            //Arrange

            //Act
            nock(mockUrl).persist().delete(`/controller-service/${component.id}?version=${revision.version}`).reply(404, `Unable to locate controller service with id`);
            let deleteControllerService = controllerServiceRequestHandler.deleteControllerService(component.id, revision.version);

            //Assert
            expect(deleteControllerService).to.be.rejectedWith(ControllerServiceDoesNotExistsError);
        });
    });

    describe('getControllerService Test', () => {
        it('Sanity: Check getControllerService', async () => {
            //Arrange
            let response = {
                "component": component,
                "revision": revision
            };

            //Act
            nock(mockUrl).persist().get(`/controller-service/${component.id}`).reply(200, response);
            let responseControllerService = await controllerServiceRequestHandler.getControllerService(component.id);

            //Assert
            expect(responseControllerService.component.id).to.be.equal(controllerServiceEntity.component.id);
        });

        it('Check throws ControllerServiceDoesNotExist error for controller service which does not exist for get operation', async () => {
            //Arrange

            //Act
            nock(mockUrl).persist().get(`/controller-service/${component.id}`).reply(404, `Unable to locate controller service with id`);
            let getControllerService = controllerServiceRequestHandler.getControllerService(component.id);

            //Assert
            expect(getControllerService).to.be.rejectedWith(ControllerServiceDoesNotExistsError);
        });
    });

    describe('updateServiceControllerProperties Test', () => {
        it('Sanity: Check updateServiceControllerProperties', async () => {
            //Arrange
            let response = {
                "component": component,
                "revision": revision
            };

            //Act
            nock(mockUrl).persist().put(`/controller-service/${component.id}`).reply(200, response);
            let responseControllerService = await controllerServiceRequestHandler.updateServiceControllerProperties(component.properties, component.id, revision.version);

            //Assert
            expect(responseControllerService.component.id).to.be.equal(controllerServiceEntity.component.id);
        });

        it('Check throws ControllerServiceDoesNotExist error for controller service which does not exist for put operation', async () => {
            //Arrange

            //Act
            nock(mockUrl).persist().put(`/controller-service/${component.id}`).reply(404, `Unable to locate controller service with id`);
            let updateControllerService = controllerServiceRequestHandler.updateServiceControllerProperties(component.properties, component.id, revision.version);

            //Assert
            expect(updateControllerService).to.be.rejectedWith(ControllerServiceDoesNotExistsError);
        });
    });

    describe('changeControllerServiceState Test', () => {
        it('Sanity: Check changeControllerServiceState', async () => {
            //Arrange
            let response = {
                "component": component,
                "revision": revision
            };

            //Act
            nock(mockUrl).persist().put(`/controller-service/${component.id}`).reply(200, response);
            let responseControllerService = await controllerServiceRequestHandler.changeControllerServiceState(component.state, component.id, revision.version);

            //Assert
            expect(responseControllerService.component.id).to.be.equal(controllerServiceEntity.component.id);
        });

        it('Check throws ControllerServiceDoesNotExist error for controller service which does not exist for put operation', async () => {
            //Arrange

            //Act
            nock(mockUrl).persist().put(`/controller-service/${component.id}`).reply(404, `Unable to locate controller service with id`);
            let updateControllerService = controllerServiceRequestHandler.changeControllerServiceState(component.state, component.id, revision.version);

            //Assert
            expect(updateControllerService).to.be.rejectedWith(ControllerServiceDoesNotExistsError);
        });
    });


});
