import chaiAsPromised = require('chai-as-promised');
import {IPoliciesRequestHandler} from "../../../../src/NiFiRequestSender/SecureHandlers/PoliciesRequestHandler/IPoliciesRequestHandler";
import {PoliciesRequestHandler} from "../../../../src/NiFiRequestSender/SecureHandlers/PoliciesRequestHandler/PoliciesRequestHandler";
import {RequestSender} from "../../../../src/NiFiRequestSender/RequestSender";
import {AccessPolicyType} from "../../../../src/NiFiObjects/Types/SecureTypes/AccessPolicy/AccessPolicyType";
import {AccessPolicyEntity} from "../../../../src/NiFiObjects/SecureObjects/AccessPolicy/AccessPolicyEntity";
import {AccessPolicyEntityGenerator} from "../../../NiFiObjectGenerator/SecureGenerators/AccessPolicy/AccessPolicyEntityGenerator";
import {TenantType} from "../../../../src/NiFiObjects/Types/SecureTypes/Tenant/TenantType";
import {TenantEntityType} from "../../../../src/NiFiObjects/Types/SecureTypes/Tenant/TenantEntityType";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultPoliciesRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let policiesRequestHandler: IPoliciesRequestHandler;
    before('init PoliciesRequestHandler  ', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        policiesRequestHandler = new PoliciesRequestHandler(requestSender);

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('getPolicy Test', () => {
        it('Sanity: Check getPolicy', async () => {
            //Arrange
            let accessPolicyEntity : AccessPolicyEntity = new AccessPolicyEntityGenerator().generate();
            let policy :AccessPolicyType = accessPolicyEntity.getComponent();
            let response = {
                "revision": accessPolicyEntity.getRevision(),
                "id": accessPolicyEntity.getId(),
                "uri": accessPolicyEntity.getUri(),
                "position": accessPolicyEntity.getPosition(),
                "permissions": accessPolicyEntity.getPosition(),
                "bulletins": accessPolicyEntity.getBulletins(),
                "disconnectedNodeAcknowledged": accessPolicyEntity.getDisconnectedNodeAcknowledged(),
                "generated": accessPolicyEntity.getGenerated(),
                "component": accessPolicyEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().get(`/policies/${policy.action}`).reply(200, response);
            let responsePolicy = await policiesRequestHandler.getPolicy(policy.action);

            //Assert
            expect(responsePolicy.id).to.be.equal(response.id);
        });

    });

    describe('addUserToPolicy Test', () => {
        it('Sanity: Check addUserToPolicy', async () => {
            //Arrange
            let accessPolicyEntity : AccessPolicyEntity = new AccessPolicyEntityGenerator().generate();
            let policy :AccessPolicyType = accessPolicyEntity.getComponent();
            let tenantEntity :TenantEntityType = policy.users[0];
            let tenant:TenantType = tenantEntity.component;
            let response = {
                "revision": accessPolicyEntity.getRevision(),
                "id": accessPolicyEntity.getId(),
                "uri": accessPolicyEntity.getUri(),
                "position": accessPolicyEntity.getPosition(),
                "permissions": accessPolicyEntity.getPosition(),
                "bulletins": accessPolicyEntity.getBulletins(),
                "disconnectedNodeAcknowledged": accessPolicyEntity.getDisconnectedNodeAcknowledged(),
                "generated": accessPolicyEntity.getGenerated(),
                "component": accessPolicyEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().put(`/policies/${accessPolicyEntity.getId()}`).reply(200, response);
            let responsePolicy = await policiesRequestHandler.addUserToPolicy(accessPolicyEntity,policy.id,tenant.identity);

            //Assert
            expect(responsePolicy.id).to.be.equal(response.id);
        });

    });

    describe('createPolicyWithGroupPermission Test', () => {
        it('Sanity: Check createPolicyWithGroupPermission', async () => {
            //Arrange
            let accessPolicyEntity : AccessPolicyEntity = new AccessPolicyEntityGenerator().generate();
            let policy :AccessPolicyType = accessPolicyEntity.getComponent();
            let tenantEntity :TenantEntityType = policy.userGroups[0];
            let tenant:TenantType = tenantEntity.component;
            let response = {
                "revision": accessPolicyEntity.getRevision(),
                "id": accessPolicyEntity.getId(),
                "uri": accessPolicyEntity.getUri(),
                "position": accessPolicyEntity.getPosition(),
                "permissions": accessPolicyEntity.getPosition(),
                "bulletins": accessPolicyEntity.getBulletins(),
                "disconnectedNodeAcknowledged": accessPolicyEntity.getDisconnectedNodeAcknowledged(),
                "generated": accessPolicyEntity.getGenerated(),
                "component": accessPolicyEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().post(`/policies`).reply(200, response);
            let responseCreatedPolicyId = await policiesRequestHandler.createPolicyWithGroupPermission(policy.action,policy.resource,tenant.identity,tenant.id);

            //Assert
            expect(responseCreatedPolicyId).to.be.equal(response.id);
        });

    });

    describe('createPolicyWithUserPermission Test', () => {
        it('Sanity: Check createPolicyWithUserPermission', async () => {
            //Arrange
            let accessPolicyEntity : AccessPolicyEntity = new AccessPolicyEntityGenerator().generate();
            let policy :AccessPolicyType = accessPolicyEntity.getComponent();
            let tenantEntity :TenantEntityType = policy.users[0];
            let tenant:TenantType = tenantEntity.component;
            let response = {
                "revision": accessPolicyEntity.getRevision(),
                "id": accessPolicyEntity.getId(),
                "uri": accessPolicyEntity.getUri(),
                "position": accessPolicyEntity.getPosition(),
                "permissions": accessPolicyEntity.getPosition(),
                "bulletins": accessPolicyEntity.getBulletins(),
                "disconnectedNodeAcknowledged": accessPolicyEntity.getDisconnectedNodeAcknowledged(),
                "generated": accessPolicyEntity.getGenerated(),
                "component": accessPolicyEntity.getComponent()
            };

            //Act
            nock(mockUrl).persist().post(`/policies`).reply(200, response);
            let responseCreatedPolicyId = await policiesRequestHandler.createPolicyWithUserPermission(policy.action,policy.resource,tenant.identity,tenant.id);

            //Assert
            expect(responseCreatedPolicyId).to.be.equal(response.id);
        });

    });


});
