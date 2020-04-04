import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {RevisionType} from "../../../src/NiFiObjects/Types/RevisionType";
import {LabelRequestHandler} from "../../../src/NiFiRequestSender/LabelRequestHandler/LabelRequestHandler";
import {ILabelRequestHandler} from "../../../src/NiFiRequestSender/LabelRequestHandler/ILabelRequestHandler";
import {LabelEntity} from "../../../src/NiFiObjects/Label/LabelEntity";
import {LabelEntityGenerator} from "../../NiFiObjectGenerator/Label/LabelEntityGenerator";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultLabelRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let labelRequestHandler: ILabelRequestHandler;
    let labelEntity: LabelEntity;
    let revision: RevisionType;
    before('init LabelRequestHandler  ', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        labelRequestHandler = new LabelRequestHandler(requestSender);
        labelEntity = new LabelEntityGenerator().generate();
        revision = labelEntity.revision;

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('deleteLabel Test', () => {
        it('Sanity: Check deleteLabel', async () => {
            //Arrange
            let response = {
                "bulletins": labelEntity.getBulletins(),
                "component": labelEntity.getComponent(),
                "id": labelEntity.getId(),
                "permissions": labelEntity.getPermissions(),
                "position": labelEntity.getPosition(),
                "revision": labelEntity.getRevision(),
                "uri": labelEntity.getUri()
            };

            //Act
            nock(mockUrl).persist().delete(`/labels/${labelEntity.getId()}?version=${revision.version}`).reply(200, response);
            let responseLabel = await labelRequestHandler.deleteLabel(labelEntity.getId(),revision.version);

            //Assert
            expect(responseLabel.id).to.be.equal(response.id);
        });

    });

    describe('getLabel Test', () => {
        it('Sanity: Check getLabel', async () => {
            //Arrange
            let response = {
                "bulletins": labelEntity.getBulletins(),
                "component": labelEntity.getComponent(),
                "id": labelEntity.getId(),
                "permissions": labelEntity.getPermissions(),
                "position": labelEntity.getPosition(),
                "revision": labelEntity.getRevision(),
                "uri": labelEntity.getUri()
            };

            //Act
            nock(mockUrl).persist().get(`/labels/${labelEntity.getId()}`).reply(200, response);
            let responseLabel = await labelRequestHandler.getLabel(labelEntity.getId());

            //Assert
            expect(responseLabel.id).to.be.equal(response.id);
        });

    });

    describe('updateLabel Test', () => {
        it('Sanity: Check updateLabel', async () => {
            //Arrange
            let response = {
                "bulletins": labelEntity.getBulletins(),
                "component": labelEntity.getComponent(),
                "id": labelEntity.getId(),
                "permissions": labelEntity.getPermissions(),
                "position": labelEntity.getPosition(),
                "revision": labelEntity.getRevision(),
                "uri": labelEntity.getUri()
            };

            //Act
            nock(mockUrl).persist().put(`/labels/${labelEntity.getId()}`).reply(200, response);
            let responseLabel = await labelRequestHandler.updateLabel(labelEntity.getId(),labelEntity);

            //Assert
            expect(responseLabel.id).to.be.equal(response.id);
        });

    });




});
