import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {RevisionType} from "../../../src/NiFiObjects/Types/RevisionType";
import {PortEntityGenerator} from "../../NiFiObjectGenerator/Port/PortEntityGenerator";
import {PortEntity} from "../../../src/NiFiObjects/Port/PortEntity";
import {InputPortsRequestHandler} from "../../../src/NiFiRequestSender/InputPortsRequestHandler/InputPortsRequestHandler";
import {IInputPortsRequestHandler} from "../../../src/NiFiRequestSender/InputPortsRequestHandler/IInputPortsRequestHandler";
import {PortType} from "../../../src/NiFiObjects/Types/Port/PortType";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultInputPortsRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;  
    let inputPortsRequestHandler: IInputPortsRequestHandler;
    let portEntity: PortEntity;
    let revision: RevisionType;
    before('init InputPortsRequestHandler', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        inputPortsRequestHandler = new InputPortsRequestHandler(requestSender);
        portEntity = new PortEntityGenerator().generate();
        revision = portEntity.revision;

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('getInputPort Test', () => {
        it('Sanity: Check getInputPort', async () => {
            //Arrange
            let response = {
                "bulletins": portEntity.getBulletins(),
                "component": portEntity.getComponent(),
                "disconnectedNodeAcknowledged": portEntity.getDisconnectedNodeAcknowledged(),
                "id": portEntity.getId(),
                "operatePermissions": portEntity.getOperatePermissions(),
                "permissions": portEntity.getPermissions(),
                "portType": portEntity.getPortType(),
                "position": portEntity.getPosition(),
                "revision": portEntity.getRevision(),
                "uri": portEntity.getUri()
            };

            //Act
            nock(mockUrl).persist().get(`/input-ports/${portEntity.getId()}`).reply(200, response);
            let responseInputPort = await inputPortsRequestHandler.getInputPort(portEntity.getId());

            //Assert
            expect(responseInputPort.id).to.be.equal(response.id);
        });

    });

    describe('changeInputPortState Test', () => {
        it('Sanity: Check changeInputPortState', async () => {
            //Arrange
            let component:PortType = portEntity.getComponent();

            let response = {
                "bulletins": portEntity.getBulletins(),
                "component": portEntity.getComponent(),
                "disconnectedNodeAcknowledged": portEntity.getDisconnectedNodeAcknowledged(),
                "id": portEntity.getId(),
                "operatePermissions": portEntity.getOperatePermissions(),
                "permissions": portEntity.getPermissions(),
                "portType": portEntity.getPortType(),
                "position": portEntity.getPosition(),
                "revision": portEntity.getRevision(),
                "uri": portEntity.getUri()
            };

            //Act
            nock(mockUrl).persist().put(`/input-ports/${portEntity.getId()}`).reply(200, response);
            let responseInputPort = await inputPortsRequestHandler.changeInputPortState(portEntity.getId(),component.state,revision.version);

            //Assert
            expect(responseInputPort.id).to.be.equal(response.id);
        });

    });


});
