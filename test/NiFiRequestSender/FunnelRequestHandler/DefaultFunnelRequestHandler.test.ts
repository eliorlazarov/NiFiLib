import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {RevisionType} from "../../../src/NiFiObjects/Types/RevisionType";
import {FunnelRequestHandler} from "../../../src/NiFiRequestSender/FunnelRequestHandler/FunnelRequestHandler";
import {IFunnelRequestHandler} from "../../../src/NiFiRequestSender/FunnelRequestHandler/IFunnelRequestHandler";
import {FunnelEntity} from "../../../src/NiFiObjects/Funnel/FunnelEntity";
import {FunnelEntityGenerator} from "../../NiFiObjectGenerator/Funnel/FunnelEntityGenerator";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultFunnelRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let funnelRequestHandler: IFunnelRequestHandler;
    let funnelEntity: FunnelEntity;
    let revision: RevisionType;
    before('init ControllerServiceRequestHandler', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        funnelRequestHandler = new FunnelRequestHandler(requestSender);
        funnelEntity = new FunnelEntityGenerator().generate();
        revision = funnelEntity.revision;

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('deleteFunnel Test', () => {
        it('Sanity: Check deleteFunnel', async () => {
            //Arrange
            let response = {
                "revision": revision,
                "id": funnelEntity.getId(),
                "uri": funnelEntity.getUri(),
                "position": funnelEntity.getPosition(),
                "permissions": funnelEntity.getPermissions(),
                "component": funnelEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().delete(`/funnels/${funnelEntity.getId()}?version=${revision.version}`).reply(200, response);
            let responseDeleteFunnel = await funnelRequestHandler.deleteFunnel(funnelEntity.getId(), revision.version);

            //Assert
            expect(responseDeleteFunnel.id).to.be.equal(response.id);
        });

    });


    describe('getFunnel Test', () => {
        it('Sanity: Check getFunnel', async () => {
            //Arrange
            let response = {
                "revision": revision,
                "id": funnelEntity.getId(),
                "uri": funnelEntity.getUri(),
                "position": funnelEntity.getPosition(),
                "permissions": funnelEntity.getPermissions(),
                "component": funnelEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().get(`/funnels/${funnelEntity.getId()}`).reply(200, response);
            let responseFunnel = await funnelRequestHandler.getFunnel(funnelEntity.getId());

            //Assert
            expect(responseFunnel.id).to.be.equal(response.id);
        });

    });

    describe('updateFunnel Test', () => {
        it('Sanity: Check updateFunnel', async () => {
            //Arrange
            let response = {
                "revision": revision,
                "id": funnelEntity.getId(),
                "uri": funnelEntity.getUri(),
                "position": funnelEntity.getPosition(),
                "permissions": funnelEntity.getPermissions(),
                "component": funnelEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().put(`/funnels/${funnelEntity.getId()}`).reply(200, response);
            let responseFunnel = await funnelRequestHandler.updateFunnel(funnelEntity.getId(),funnelEntity);

            //Assert
            expect(responseFunnel.id).to.be.equal(response.id);
        });

    });




});
