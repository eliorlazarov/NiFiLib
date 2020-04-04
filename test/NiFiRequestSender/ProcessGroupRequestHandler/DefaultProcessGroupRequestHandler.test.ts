import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {RevisionType} from "../../../src/NiFiObjects/Types/RevisionType";
import {IProcessGroupRequestHandler} from "../../../src/NiFiRequestSender/ProcessGroupRequestHandler/IProcessGroupRequestHandler";
import {ProcessGroupEntity} from "../../../src/NiFiObjects/ProcessGroup/ProcessGroupEntity";
import {ProcessGroupRequestHandler} from "../../../src/NiFiRequestSender/ProcessGroupRequestHandler/ProcessGroupRequestHandler";
import {ProcessGroupEntityGenerator} from "../../NiFiObjectGenerator/ProcessGroup/ProcessGroupEntityGenerator";
import {ConnectionEntityGenerator} from "../../NiFiObjectGenerator/Connection/ConnectionEntityGenerator";
import {ConnectionEntity} from "../../../src/NiFiObjects/Connection/ConnectionEntity";
import {ProcessorEntityGenerator} from "../../NiFiObjectGenerator/Processor/ProcessorEntityGenerator";
import {VariableRegistryEntityGenerator} from "../../NiFiObjectGenerator/VariableRegistry/VariableRegistryEntityGenerator";
import {ProcessGroupType} from "../../../src/NiFiObjects/Types/ProcessGroup/ProcessGroupType";
import {GlobalOperations} from "../../globalOperations";
import {RevisionGenerator} from "../../NiFiObjectGenerator/RevisionGenerator";
import {PositionGenerator} from "../../NiFiObjectGenerator/PositionGenerator";
import {PermissionGenerator} from "../../NiFiObjectGenerator/PermissionGenerator";
import {FlowGenerator} from "../../NiFiObjectGenerator/Flow/FlowGenerator";
import {Flow} from "../../../src/NiFiObjects/Flow/Flow";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultProcessGroupRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let processGroupRequestHandler: IProcessGroupRequestHandler;
    let processGroupEntity: ProcessGroupEntity;
    let revision: RevisionType;
    before('init LabelRequestHandler  ', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        processGroupRequestHandler = new ProcessGroupRequestHandler(requestSender);
        processGroupEntity = new ProcessGroupEntityGenerator().generate();
        revision = processGroupEntity.revision;

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('deleteProcessGroup Test', () => {
        it('Sanity: Check deleteProcessGroup', async () => {
            //Arrange
            let response = {
                "revision": revision,
                id: processGroupEntity.getId(),
                uri: processGroupEntity.getUri(),
                position: processGroupEntity.getPosition(),
                permission: processGroupEntity.getPermission(),
                bulletins: processGroupEntity.getBulletins(),
                disconnectedNodeAcknowledged: processGroupEntity.getDisconnectedNodeAcknowledged(),
                component: processGroupEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().delete(`/process-groups/${processGroupEntity.getId()}?version=${revision.version}`).reply(200, response);
            let responseProcessGroup = await processGroupRequestHandler.deleteProcessGroup(processGroupEntity.getId(), revision.version);

            //Assert
            expect(responseProcessGroup.id).to.be.equal(response.id);
        });

    });

    describe('getProcessGroup Test', () => {
        it('Sanity: Check getProcessGroup', async () => {
            //Arrange
            let response = {
                "revision": revision,
                id: processGroupEntity.getId(),
                uri: processGroupEntity.getUri(),
                position: processGroupEntity.getPosition(),
                permission: processGroupEntity.getPermission(),
                bulletins: processGroupEntity.getBulletins(),
                disconnectedNodeAcknowledged: processGroupEntity.getDisconnectedNodeAcknowledged(),
                component: processGroupEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().get(`/process-groups/${processGroupEntity.getId()}`).reply(200, response);
            let responseProcessGroup = await processGroupRequestHandler.getProcessGroup(processGroupEntity.getId());

            //Assert
            expect(responseProcessGroup.id).to.be.equal(response.id);
        });


    });

    describe('getProcessGroupConnections Test', () => {

        it('Sanity: Check getProcessGroupConnections', async () => {

            //Arrange
            let connectionEntity: ConnectionEntity = new ConnectionEntityGenerator().generate();
            let response = [{
                "revision": connectionEntity.getRevision(),
                "id": connectionEntity.getId(),
                "uri": connectionEntity.getUri(),
                "position": connectionEntity.getPosition(),
                "permissions": connectionEntity.getPermissions(),
                "component": connectionEntity.getComponent()
            }];

            //Act
            nock(mockUrl).persist().get(`/process-groups/${processGroupEntity.getId()}/connections`).reply(200, response);
            let responseConnections = await processGroupRequestHandler.getProcessGroupConnections(processGroupEntity.getId());

            //Assert
            expect(responseConnections[0].id).to.be.equal(response[0].id);
        });

    });

    describe('getProcessGroups Test', () => {

        it('Sanity: Check getProcessGroups', async () => {

            //Arrange

            let response = [{
                "revision": revision,
                id: processGroupEntity.getId(),
                uri: processGroupEntity.getUri(),
                position: processGroupEntity.getPosition(),
                permission: processGroupEntity.getPermission(),
                bulletins: processGroupEntity.getBulletins(),
                disconnectedNodeAcknowledged: processGroupEntity.getDisconnectedNodeAcknowledged(),
                component: processGroupEntity.getComponent()
            }];

            //Act
            nock(mockUrl).persist().get(`/process-groups/${processGroupEntity.getId()}/process-groups`).reply(200, response);
            let responseProcessGroups = await processGroupRequestHandler.getProcessGroups(processGroupEntity.getId());

            //Assert
            expect(responseProcessGroups[0].id).to.be.equal(response[0].id);
        });

    });

    describe('getProcessors Test', () => {

        it('Sanity: Check getProcessors', async () => {

            //Arrange
            let processorEntity = new ProcessorEntityGenerator().generate();
            let response = [{
                "revision": processorEntity.getRevision(),
                "id": processorEntity.getId(),
                "uri": processorEntity.getUri(),
                "position": processorEntity.getPosition(),
                "permission": processorEntity.getPermissions(),
                "bulletins": processorEntity.getBulletins(),
                "disconnectedNodeAcknowledged": processorEntity.getDisconnectedNodeAcknowledged(),
                "component": processorEntity.getComponent(),
                "inputRequirements": processorEntity.getInputRequirements(),
                "status": processorEntity.getStatus(),
                "operatePermissions": processorEntity.getOperatePermissions()
            }];

            //Act
            nock(mockUrl).persist().get(`/process-groups/${processGroupEntity.getId()}/processors`).reply(200, response);
            let responseProcessors = await processGroupRequestHandler.getProcessors(processGroupEntity.getId());

            //Assert
            expect(responseProcessors[0].id).to.be.equal(response[0].id);
        });

    });

    describe('getVariableRegistry Test', () => {

        it('Sanity: Check getVariableRegistry', async () => {

            //Arrange
            let variableRegistryEntity = new VariableRegistryEntityGenerator().generate();
            let response = {
                "processGroupRevision": variableRegistryEntity.getProcessGroupRevision(),
                "variableRegistry": variableRegistryEntity.getVariableRegistry(),
                "disconnectedNodeAcknowledged": variableRegistryEntity.getDisconnectedNodeAcknowledged()
            };

            //Act
            nock(mockUrl).persist().get(`/process-groups/${processGroupEntity.getId()}/variable-registry`).reply(200, response);
            let responseVariableRegistry = await processGroupRequestHandler.getVariableRegistry(processGroupEntity.getId());

            //Assert
            expect(responseVariableRegistry.disconnectedNodeAcknowledged).to.be.equal(response.disconnectedNodeAcknowledged);
        });

    });

    describe('postProcessGroup Test', () => {

        it('Sanity: Check postProcessGroup', async () => {

            //Arrange
            let processGroup: ProcessGroupType = processGroupEntity.getComponent();
            let response = {
                "revision": revision,
                id: processGroupEntity.getId(),
                uri: processGroupEntity.getUri(),
                position: processGroupEntity.getPosition(),
                permission: processGroupEntity.getPermission(),
                bulletins: processGroupEntity.getBulletins(),
                disconnectedNodeAcknowledged: processGroupEntity.getDisconnectedNodeAcknowledged(),
                component: processGroupEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().post(`/process-groups/${processGroupEntity.getId()}/process-groups`).reply(200, response);
            let responseProcessGroup = await processGroupRequestHandler.postProcessGroup(processGroupEntity.getId(), processGroup.name, processGroupEntity.getPosition().x, processGroupEntity.getPosition().y);

            //Assert
            expect(responseProcessGroup.id).to.be.equal(response.id);
        });

    });

    describe('postProcessGroupFromRegistry Test', () => {

        it('Sanity: Check postProcessGroupFromRegistry', async () => {

            //Arrange
            let flowId: string = GlobalOperations.getRandId();
            let bucketId: string = GlobalOperations.getRandId();
            let registryId: string = GlobalOperations.getRandId();
            let response = {
                "revision": revision,
                id: processGroupEntity.getId(),
                uri: processGroupEntity.getUri(),
                position: processGroupEntity.getPosition(),
                permission: processGroupEntity.getPermission(),
                bulletins: processGroupEntity.getBulletins(),
                disconnectedNodeAcknowledged: processGroupEntity.getDisconnectedNodeAcknowledged(),
                component: processGroupEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().post(`/process-groups/${processGroupEntity.getId()}/process-groups`).reply(200, response);
            let responseProcessGroup = await processGroupRequestHandler.postProcessGroupFromRegistry(processGroupEntity.getId(), processGroupEntity.getPosition().x, processGroupEntity.getPosition().y, registryId, bucketId, flowId, revision.version);

            //Assert
            expect(responseProcessGroup.id).to.be.equal(response.id);
        });

    });

    describe('postVariableRegistry Test', () => {

        it('Sanity: Check postVariableRegistry', async () => {

            //Arrange
            let response = {
                "request": {
                    "requestId": GlobalOperations.getRandId(),
                    "processGroupId": processGroupEntity.getId(),
                    "uri": GlobalOperations.getRandString(),
                    "submissionTime": GlobalOperations.getRandString(),
                    "lastUpdated": GlobalOperations.getRandString(),
                    "complete": GlobalOperations.getRandBoolean(),
                    "failureReason": GlobalOperations.getRandString(),
                    "updateSteps": [{
                        "description": GlobalOperations.getRandString(),
                        "complete": GlobalOperations.getRandBoolean(),
                        "failureReason": GlobalOperations.getRandString()
                    }],
                    "affectedComponents": [{
                        "revision": new RevisionGenerator().generate(),
                        "id": GlobalOperations.getRandId(),
                        "uri": GlobalOperations.getRandString(),
                        "position": new PositionGenerator().generate(),
                        "permissions": new PermissionGenerator().generate(),
                        "bulletins": [{}],
                        "disconnectedNodeAcknowledged": GlobalOperations.getRandBoolean(),
                        "component": {
                            "processGroupId": processGroupEntity.getId(),
                            "id": GlobalOperations.getRandId(),
                            "referenceType": GlobalOperations.getRandString(),
                            "name": GlobalOperations.getRandString(),
                            "state": GlobalOperations.getRandString(),
                            "activeThreadCount": GlobalOperations.getRandNum(),
                            "validationErrors": [GlobalOperations.getRandString()]
                        }
                    }]
                },
                "processGroupRevision": processGroupEntity.getRevision()
            };

            //Act
            nock(mockUrl).persist().post(`/process-groups/${processGroupEntity.getId()}/variable-registry/update-requests`).reply(200, response);
            let responseVariableRegistry = await processGroupRequestHandler.postVariableRegistry(processGroupEntity.getId(), [], revision.version);

            //Assert
            expect(responseVariableRegistry["processGroupRevision"].version).to.be.equal(response["processGroupRevision"].version);
        });

    });

    describe('renameProcessGroup Test', () => {

        it('Sanity: Check renameProcessGroup', async () => {

            //Arrange
            let processGroup: ProcessGroupType = processGroupEntity.getComponent();
            let response = {
                "revision": revision,
                id: processGroupEntity.getId(),
                uri: processGroupEntity.getUri(),
                position: processGroupEntity.getPosition(),
                permission: processGroupEntity.getPermission(),
                bulletins: processGroupEntity.getBulletins(),
                disconnectedNodeAcknowledged: processGroupEntity.getDisconnectedNodeAcknowledged(),
                component: processGroupEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().put(`/process-groups/${processGroupEntity.getId()}`).reply(200, response);
            let responseProcessGroup = await processGroupRequestHandler.renameProcessGroup(processGroup.name, processGroupEntity.getId(), revision.version);

            //Assert
            expect(responseProcessGroup.id).to.be.equal(response.id);
        });

    });

    describe('templateInstance Test', () => {

        it('Sanity: Check templateInstance', async () => {

            //Arrange
            let flow: Flow = new FlowGenerator().generate();
            let templateId: string = GlobalOperations.getRandId();
            let response = {
                "flow":
                    {
                        "processGroups": flow.getProcessGroups(),
                        "remoteProcessGroups": flow.getRemoteProcessGroups(),
                        "processors": flow.getProcessors(),
                        "inputPorts": flow.getInputPorts(),
                        "outputPorts": flow.getOutputPorts(),
                        "connections": flow.getConnections(),
                        "labels": flow.getLables(),
                        "funnels": flow.getFunnels()
                    }
            };

            //Act
            nock(mockUrl).persist().post(`/process-groups/${processGroupEntity.getId()}/template-instance`).reply(200, response);
            let responseTemplateInstance = await processGroupRequestHandler.createTemplateInstance(processGroupEntity.getId(), templateId, processGroupEntity.position.x, processGroupEntity.position.y);

            //Assert
            expect(responseTemplateInstance).to.be.deep.equal(response);
        });

    });
});
