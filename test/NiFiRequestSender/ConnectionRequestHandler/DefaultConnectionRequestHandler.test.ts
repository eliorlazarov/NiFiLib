import {RequestSender} from "../../../src/NiFiRequestSender/RequestSender";
import {ConnectionRequestHandler} from "../../../src/NiFiRequestSender/ConnectionRequestHandler/ConnectionRequestHandler";
import {DefaultConnectionRequestHandler} from "../../../src/NiFiRequestSender/ConnectionRequestHandler/DefaultConnectionRequestHandler";
import {ConnectionGenerator} from "../../NiFiObjectGenerator/Connection/ConnectionGenerator";
import {ConnectionDoesNotExistError} from "../../../src/errors/nifi/ConnectionDoesNotExistError";
import {GlobalOperations} from "../../globalOperations";
import {PositionGenerator} from "../../NiFiObjectGenerator/PositionGenerator";
import {ConnectableGenerator} from "../../NiFiObjectGenerator/Connection/ConnectableGenerator";
import chaiAsPromised = require('chai-as-promised');


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultConnectionRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let connectionRequestHandler: ConnectionRequestHandler;

    before('init ConnectionRequestHandler', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        connectionRequestHandler = new DefaultConnectionRequestHandler(requestSender);
    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('getConnection Test', () => {
        it('Sanity: Check getConnection', async () => {
            //Arrange
            let connection = new ConnectionGenerator().generate();
            let response = {
                "component": {
                    "id": connection.getId(),
                    "name": connection.getName(),
                    "position": connection.getPosition(),
                    "source": connection.getSource(),
                    "destination": connection.getDestination()
                }
            };

            //Act
            nock(mockUrl).persist().get(`/connections/${connection.getId()}`).reply(200, response);
            let responseConnection = await connectionRequestHandler.getConnection(connection.getId());

            //Assert
            expect(responseConnection.id).to.be.equal(connection.getId());
        });

        it('Check throws ConnectionDoesNotExist error for connection which does not exist', async () => {
            //Arrange
            let connection = new ConnectionGenerator().generate();

            //Act
            nock(mockUrl).persist().get(`/connections/${connection.getId()}`).reply(404, `Unable to find connection with id`);
            let getConnection = connectionRequestHandler.getConnection(connection.getId());

            //Assert
            expect(getConnection).to.be.rejectedWith(ConnectionDoesNotExistError);
        });
    });

    describe('deleteConnection Test', () => {
        let connectionId: string;
        let version: number;
        beforeEach(() => {
            connectionId = GlobalOperations.getRandId();
            version = GlobalOperations.getRandNum();
        });
        it('Sanity: Check deleteConnection', async () => {
            //Arrange
            let response =
                {
                    "component":
                        {
                            "id": connectionId,
                            "name": GlobalOperations.getRandString(),
                            "position": new PositionGenerator().generate(),
                            "source": new ConnectableGenerator().generate(),
                            "destination": new ConnectableGenerator().generate()
                        }
                };

            //Act
            nock(mockUrl).persist().delete(`/connections/${connectionId}?version=${version}`).reply(200, response);
            let responseConnection = await connectionRequestHandler.deleteConnection(connectionId, version);

            //Assert
            expect(responseConnection.id).to.be.equal(connectionId);
        });

        it('Check throws ConnectionDoesNotExist error for connection which does not exist for delete operation', async () => {
            //Arrange


            //Act
            nock(mockUrl).persist().delete(`/connections/${connectionId}?version=${version}`).reply(404, `Unable to find connection with id`);
            let deleteConnection = connectionRequestHandler.deleteConnection(connectionId,version);

            //Assert
            expect(deleteConnection).to.be.rejectedWith(ConnectionDoesNotExistError);
        });

    });

    describe('updateConnectionComponent Test', () => {
        it('Sanity: Check updateConnectionComponent', async () => {
            //Arrange
            let connectionId: string = GlobalOperations.getRandId();
            let version: number = GlobalOperations.getRandNum();
            let properties = {"id": connectionId};
            let response = {
                "component":

                    {
                        "id": connectionId,
                        "name": GlobalOperations.getRandString(),
                        "position": new PositionGenerator().generate(),
                        "source": new ConnectableGenerator().generate(),
                        "destination": new ConnectableGenerator().generate()
                    }
            };

            //Act
            nock(mockUrl).persist().put(`/connections/${connectionId}`).reply(200, response);
            let updatedConnection = await connectionRequestHandler.updateConnectionComponent(properties, connectionId, version);

            //Assert
            expect(updatedConnection.id).to.be.equal(connectionId);
        });

    });


});
