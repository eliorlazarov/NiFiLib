import chaiAsPromised = require('chai-as-promised');
import {SnippetGenerator} from "../../NiFiObjectGenerator/SnippetGenerator";
import {Snippet} from "../../../src/NiFiObjects/Snippet";
import {ProcessGroupEntityType} from "../../../src/NiFiObjects/Types/ProcessGroup/ProcessGroupEntityType";
import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import {SnippetsRequestHandler} from "../../../src/NiFiRequestSender/SnippetsRequestHandler/SnippetsRequestHandler";
import {DefaultSnippetsRequestHandler} from "../../../src/NiFiRequestSender/SnippetsRequestHandler/DefaultSnippetsRequestHandler";
import {RevisionType} from "../../../src/NiFiObjects/Types/RevisionType";
import {GlobalOperations} from "../../globalOperations";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultSnippetsRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let snippetsRequestHandler: SnippetsRequestHandler;
    before('init snippetsRequestHandler  ', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        snippetsRequestHandler = new DefaultSnippetsRequestHandler(requestSender);

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('createSnippet Test', () => {
        it('Sanity: Check createGroup', async () => {
            //Arrange
            let snippet: Snippet = new SnippetGenerator().generate();
            let processGroup: ProcessGroupEntityType = snippet.getProcessGroups()[0];
            let revision: RevisionType = processGroup.revision;
            let response = {
                "snippet": {
                    "id": snippet.getId(),
                    "uri": snippet.getUri(),
                    "parentGroupId": snippet.getParentGroupId(),
                    "processGroups": snippet.getProcessGroups(),
                    "remoteProcessGroups": snippet.getRemoteProcessGroups(),
                    "processors": snippet.getProcessors(),
                    "inputPorts": snippet.getInputPorts(),
                    "outputPorts": snippet.getOutputPorts(),
                    "connections": snippet.getConnections(),
                    "labels": snippet.getLabels(),
                    "funnels": snippet.getFunnels()
                },
                "diconnectedNodeAcknowledged": GlobalOperations.getRandBoolean()
            };

            //Act
            nock(mockUrl).persist().post(`/snippets`).reply(200, response);
            let responseSnippet = await snippetsRequestHandler.createSnippet(snippet.getParentGroupId(), processGroup.id, revision.version);

            //Assert
            expect(responseSnippet.id).to.be.equal(response["snippet"].id);
        });

    });

    describe('putSnippet Test', () => {
        it('Sanity: Check putSnippet', async () => {
            //Arrange
            let snippet: Snippet = new SnippetGenerator().generate();
            let newProcessGroupParentId: string = GlobalOperations.getRandId();
            let response = {
                "snippet": {
                    "id": snippet.getId(),
                    "uri": snippet.getUri(),
                    "parentGroupId": snippet.getParentGroupId(),
                    "processGroups": snippet.getProcessGroups(),
                    "remoteProcessGroups": snippet.getRemoteProcessGroups(),
                    "processors": snippet.getProcessors(),
                    "inputPorts": snippet.getInputPorts(),
                    "outputPorts": snippet.getOutputPorts(),
                    "connections": snippet.getConnections(),
                    "labels": snippet.getLabels(),
                    "funnels": snippet.getFunnels()
                },
                "diconnectedNodeAcknowledged": GlobalOperations.getRandBoolean()
            };

            //Act
            nock(mockUrl).persist().put(`/snippets/${snippet.getId()}`).reply(200, response);
            let responseSnippet = await snippetsRequestHandler.putSnippet(snippet.getId(), newProcessGroupParentId);

            //Assert
            expect(responseSnippet.id).to.be.equal(response["snippet"].id);
        });

    });


});
