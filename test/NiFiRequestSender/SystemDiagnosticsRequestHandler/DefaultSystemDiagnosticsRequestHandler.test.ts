import chaiAsPromised = require('chai-as-promised');
import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import {GlobalOperations} from "../../globalOperations";
import {SystemDiagnosticsRequestHandler} from "../../../src/NiFiRequestSender/SystemDiagnosticsRequestHandler/SystemDiagnosticsRequestHandler";
import {DefaultSystemDiagnosticsRequestHandler} from "../../../src/NiFiRequestSender/SystemDiagnosticsRequestHandler/DefaultSystemDiagnosticsRequestHandler";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultSystemDiagnosticsRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let systemDiagnosticsRequestHandler: SystemDiagnosticsRequestHandler;
    before('init systemDiagnosticsRequestHandler  ', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        systemDiagnosticsRequestHandler = new DefaultSystemDiagnosticsRequestHandler(requestSender);

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('getSystemDiagnostics Test', () => {
        it('Sanity: Check getSystemDiagnostics', async () => {
            //Arrange
            let nodeWise: boolean = GlobalOperations.getRandBoolean();
            let response = {
                "systemDiagnostics": {
                    "aggregateSnapshot": {
                        "totalNonHeap": "value",
                        "totalNonHeapBytes": GlobalOperations.getRandNum(),
                        "usedNonHeap": "value",
                        "usedNonHeapBytes": GlobalOperations.getRandNum(),
                        "freeNonHeap": "value",
                        "freeNonHeapBytes": GlobalOperations.getRandNum(),
                        "maxNonHeap": "value",
                        "maxNonHeapBytes": GlobalOperations.getRandNum(),
                        "nonHeapUtilization": "value",
                        "totalHeap": "value",
                        "totalHeapBytes": GlobalOperations.getRandNum(),
                        "usedHeap": "value",
                        "usedHeapBytes": GlobalOperations.getRandNum(),
                        "freeHeap": "value",
                        "freeHeapBytes": GlobalOperations.getRandNum(),
                        "maxHeap": "value",
                        "maxHeapBytes": GlobalOperations.getRandNum(),
                        "heapUtilization": "value",
                        "availableProcessors": GlobalOperations.getRandNum(),
                        "processorLoadAverage": GlobalOperations.getRandNum(),
                        "totalThreads": GlobalOperations.getRandNum(),
                        "daemonThreads": GlobalOperations.getRandNum(),
                        "uptime": "value",
                        "flowFileRepositoryStorageUsage": {
                            "identifier": "value",
                            "freeSpace": "value",
                            "totalSpace": "value",
                            "usedSpace": "value",
                            "freeSpaceBytes": GlobalOperations.getRandNum(),
                            "totalSpaceBytes": GlobalOperations.getRandNum(),
                            "usedSpaceBytes": GlobalOperations.getRandNum(),
                            "utilization": "value"
                        },
                        "contentRepositoryStorageUsage": [{
                            "identifier": "value",
                            "freeSpace": "value",
                            "totalSpace": "value",
                            "usedSpace": "value",
                            "freeSpaceBytes": GlobalOperations.getRandNum(),
                            "totalSpaceBytes": GlobalOperations.getRandNum(),
                            "usedSpaceBytes": GlobalOperations.getRandNum(),
                            "utilization": "value"
                        }],
                        "provenanceRepositoryStorageUsage": [{
                            "identifier": "value",
                            "freeSpace": "value",
                            "totalSpace": "value",
                            "usedSpace": "value",
                            "freeSpaceBytes": GlobalOperations.getRandNum(),
                            "totalSpaceBytes": GlobalOperations.getRandNum(),
                            "usedSpaceBytes": GlobalOperations.getRandNum(),
                            "utilization": "value"
                        }],
                        "garbageCollection": [{
                            "name": "value",
                            "collectionCount": GlobalOperations.getRandNum(),
                            "collectionTime": "value",
                            "collectionMillis": GlobalOperations.getRandNum()
                        }],
                        "statsLastRefreshed": "value",
                        "versionInfo": {
                            "niFiVersion": "value",
                            "javaVendor": "value",
                            "javaVersion": "value",
                            "osName": "value",
                            "osVersion": "value",
                            "osArchitecture": "value",
                            "buildTag": "value",
                            "buildRevision": "value",
                            "buildBranch": "value",
                            "buildTimestamp": "value"
                        }
                    },
                    "nodeSnapshots": [{
                        "nodeId": "value",
                        "address": "value",
                        "apiPort": GlobalOperations.getRandNum(),
                        "snapshot": {
                            "totalNonHeap": "value",
                            "totalNonHeapBytes": GlobalOperations.getRandNum(),
                            "usedNonHeap": "value",
                            "usedNonHeapBytes": GlobalOperations.getRandNum(),
                            "freeNonHeap": "value",
                            "freeNonHeapBytes": GlobalOperations.getRandNum(),
                            "maxNonHeap": "value",
                            "maxNonHeapBytes": GlobalOperations.getRandNum(),
                            "nonHeapUtilization": "value",
                            "totalHeap": "value",
                            "totalHeapBytes": GlobalOperations.getRandNum(),
                            "usedHeap": "value",
                            "usedHeapBytes": GlobalOperations.getRandNum(),
                            "freeHeap": "value",
                            "freeHeapBytes": GlobalOperations.getRandNum(),
                            "maxHeap": "value",
                            "maxHeapBytes": GlobalOperations.getRandNum(),
                            "heapUtilization": "value",
                            "availableProcessors": GlobalOperations.getRandNum(),
                            "processorLoadAverage": GlobalOperations.getRandNum(),
                            "totalThreads": GlobalOperations.getRandNum(),
                            "daemonThreads": GlobalOperations.getRandNum(),
                            "uptime": "value",
                            "flowFileRepositoryStorageUsage": {
                                "identifier": "value",
                                "freeSpace": "value",
                                "totalSpace": "value",
                                "usedSpace": "value",
                                "freeSpaceBytes": GlobalOperations.getRandNum(),
                                "totalSpaceBytes": GlobalOperations.getRandNum(),
                                "usedSpaceBytes": GlobalOperations.getRandNum(),
                                "utilization": "value"
                            },
                            "contentRepositoryStorageUsage": [{
                                "identifier": "value",
                                "freeSpace": "value",
                                "totalSpace": "value",
                                "usedSpace": "value",
                                "freeSpaceBytes": GlobalOperations.getRandNum(),
                                "totalSpaceBytes": GlobalOperations.getRandNum(),
                                "usedSpaceBytes": GlobalOperations.getRandNum(),
                                "utilization": "value"
                            }],
                            "provenanceRepositoryStorageUsage": [{
                                "identifier": "value",
                                "freeSpace": "value",
                                "totalSpace": "value",
                                "usedSpace": "value",
                                "freeSpaceBytes": GlobalOperations.getRandNum(),
                                "totalSpaceBytes": GlobalOperations.getRandNum(),
                                "usedSpaceBytes": GlobalOperations.getRandNum(),
                                "utilization": "value"
                            }],
                            "garbageCollection": [{
                                "name": "value",
                                "collectionCount": GlobalOperations.getRandNum(),
                                "collectionTime": "value",
                                "collectionMillis": GlobalOperations.getRandNum()
                            }],
                            "statsLastRefreshed": "value",
                            "versionInfo": {
                                "niFiVersion": "value",
                                "javaVendor": "value",
                                "javaVersion": "value",
                                "osName": "value",
                                "osVersion": "value",
                                "osArchitecture": "value",
                                "buildTag": "value",
                                "buildRevision": "value",
                                "buildBranch": "value",
                                "buildTimestamp": "value"
                            }
                        }
                    }]
                }
            };

            //Act
            nock(mockUrl).persist().get(`/system-diagnostics?nodewise=${JSON.stringify(nodeWise)}`).reply(200, response);
            let responseSystemDiagnostics = await systemDiagnosticsRequestHandler.getSystemDiagnostics(nodeWise);

            //Assert
            expect(responseSystemDiagnostics["systemDiagnostics"]).to.be.deep.equal(response["snippet"]);
        });

    });


});
