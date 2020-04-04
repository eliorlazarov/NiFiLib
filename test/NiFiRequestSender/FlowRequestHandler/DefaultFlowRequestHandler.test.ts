import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import chaiAsPromised = require('chai-as-promised');
import {IFlowRequestHandler} from "../../../src/NiFiRequestSender/FlowRequestHandler/IFlowRequestHandler";
import {FlowRequestHandler} from "../../../src/NiFiRequestSender/FlowRequestHandler/FlowRequestHandler";
import {GlobalOperations} from "../../globalOperations";
import {ClusterSummaryGenerator} from "../../NiFiObjectGenerator/ClusterSummaryGenerator";
import {ControllerServiceEntityGenerator} from "../../NiFiObjectGenerator/ControllerService/ControllerServiceEntityGenerator";
import {ProcessGroupFlowType} from "../../../src/NiFiObjects/Types/Flow/ProcessGroupFlow/ProcessGroupFlowType";
import {ProcessGroupFlowEntityGenerator} from "../../NiFiObjectGenerator/Flow/ProcessGroupFlow/ProcessGroupFlowEntityGenerator";
import {ProcessGroupFlowEntity} from "../../../src/NiFiObjects/Flow/ProcessGroupFlow/ProcessGroupFlowEntity";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultFlowRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let flowRequestHandler: IFlowRequestHandler;

    before('init FlowRequestHandler', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        flowRequestHandler = new FlowRequestHandler(requestSender);

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('changeProcessGroupState Test', () => {
        it('Sanity: Check changeProcessGroupState', async () => {
            //Arrange
            let processGroupId = GlobalOperations.getRandId();
            let state = GlobalOperations.getRandString();
            let response = {
                "id": processGroupId,
                "state": state,
                "components": {
                    "name": {
                        "clientId": GlobalOperations.getRandId(),
                        "version": GlobalOperations.getRandNum(),
                        "lastModifier": GlobalOperations.getRandString()
                    }
                },
                "disconnectedNodeAcknowledged": GlobalOperations.getRandBoolean()
            };

            //Act
            nock(mockUrl).persist().put(`/flow/process-groups/${processGroupId}`).reply(200, response);
            let responseChangedProcessGroup = await flowRequestHandler.changeProcessGroupState(state, processGroupId);

            //Assert
            expect(responseChangedProcessGroup["id"]).to.be.equal(response.id);
        });


    });

    describe('getClusterSummary Test', () => {
        it('Sanity: Check getClusterSummary', async () => {
            //Arrange
            let clusterSummary = new ClusterSummaryGenerator().generate();
            let response = {
                "clusterSummary": {
                    "connectedNodes": clusterSummary.getConnectedNodes(),
                    "connectedNodeCount": clusterSummary.getConnectedNodeCount(),
                    "totalNodeCount": clusterSummary.getTotalNodeCount(),
                    "connectedToCluster": clusterSummary.getConnectedToCluster(),
                    "clustered": clusterSummary.getClustered()
                }
            };

            //Act
            nock(mockUrl).persist().get(`/flow/cluster/summary`).reply(200, response);
            let responseClusterSummary = await flowRequestHandler.getClusterSummary();

            //Assert
            expect(responseClusterSummary).to.be.deep.equal(response.clusterSummary);
        });


    });

    describe('getProcessGroupControllerServices Test', () => {
        it('Sanity: Check getProcessGroupControllerServices', async () => {
            //Arrange
            let controllerServices = GlobalOperations.generateAttributes(new ControllerServiceEntityGenerator());
            let processGroupId = controllerServices[0].parentGroupId;
            let response = {
                "controllerServices": controllerServices
            };

            //Act
            nock(mockUrl).persist().get(`/flow/process-groups/${processGroupId}/controller-services`).reply(200, response);
            let responseControllerServices = await flowRequestHandler.getProcessGroupControllerServices(processGroupId);

            //Assert
            expect(responseControllerServices).to.be.deep.equal(response["controllerServices"]);
        });
    });

    describe('getProcessGroupFlow Test', () => {
        it('Sanity: Check getProcessGroupFlow', async () => {
            //Arrange
            let processGroupFlowEntity:ProcessGroupFlowEntity = new ProcessGroupFlowEntityGenerator().generate() ;
            let processGroupFlow:ProcessGroupFlowType = processGroupFlowEntity.getProcessGroupFlow();

            let response = {
                "processGroupFlow": processGroupFlow,
                "permissions":processGroupFlowEntity.getPermissions()
            };

            //Act
            nock(mockUrl).persist().get(`/flow/process-groups/${processGroupFlow.id}`).reply(200, response);
            let responseProcessGroupFlow = await flowRequestHandler.getProcessGroupFlow(processGroupFlow.id);

            //Assert
            expect(responseProcessGroupFlow).to.be.deep.equal(response["processGroupFlow"]);
        });
    });

    describe('getRootPgId Test', () => {
        it('Sanity: Check getRootPgId', async () => {
            //Arrange

            let rootPgId = GlobalOperations.getRandId();
            let response = {
                "body": {
                    "processGroupFlow": {
                        "id": rootPgId
                    }
                }
            };

            //Act
            nock(mockUrl).persist().get(`/flow/process-groups/root`).reply(200, response);
            let responseRootId = await flowRequestHandler.getRootPgId();

            //Assert
            expect(responseRootId).to.be.deep.equal(response['body']['processGroupFlow']['id']);
        });
    });


});
