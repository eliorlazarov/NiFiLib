import chaiAsPromised = require('chai-as-promised');
import {RequestSender} from "../../../../src/NiFiRequestSender/RequestSender";
import {TenantsRequestHandler} from "../../../../src/NiFiRequestSender/SecureHandlers/TenantsRequestHandler/TenantsRequestHandler";
import {DefaultTenantsRequestHandler} from "../../../../src/NiFiRequestSender/SecureHandlers/TenantsRequestHandler/DefaultTenantsRequestHandler";
import {RevisionType} from "../../../../src/NiFiObjects/Types/RevisionType";
import {UserGroupEntityGenerator} from "../../../NiFiObjectGenerator/SecureGenerators/UserGroup/UserGroupEntityGenerator";
import {UserGroupType} from "../../../../src/NiFiObjects/Types/SecureTypes/UserGroup/UserGroupType";
import {UserGroupEntity} from "../../../../src/NiFiObjects/SecureObjects/UserGroup/UserGroupEntity";
import {UserEntityGenerator} from "../../../NiFiObjectGenerator/SecureGenerators/User/UserEntityGenerator";
import {UserEntity} from "../../../../src/NiFiObjects/SecureObjects/User/UserEntity";
import {UserType} from "../../../../src/NiFiObjects/Types/SecureTypes/User/UserType";
import {TenantsEntity} from "../../../../src/NiFiObjects/SecureObjects/Tenant/TenantsEntity";
import {TenantsEntityGenerator} from "../../../NiFiObjectGenerator/SecureGenerators/Tenant/TenantsEntityGenerator";
import {GlobalOperations} from "../../../globalOperations";


const chai = require('chai');
const nock = require('nock');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('DefaultTenantsRequestHandler Test', () => {
    let mockUrl: string;
    let requestSender: RequestSender;
    let tenantsRequestHandler: TenantsRequestHandler;
    before('init TenantsRequestHandler  ', () => {
        mockUrl = 'http://mockUrl:8080';
        requestSender = new RequestSender(mockUrl);
        tenantsRequestHandler = new DefaultTenantsRequestHandler(requestSender);

    });

    afterEach('Clean Nock', () => {
        nock.cleanAll();
    });

    describe('createGroup Test', () => {
        it('Sanity: Check createGroup', async () => {
            //Arrange
            let userGroupEntity: UserGroupEntity = new UserGroupEntityGenerator().generate();
            let userGroup: UserGroupType = userGroupEntity.getComponent();
            let response = {
                "revision": userGroupEntity.getId(),
                "id": userGroupEntity.getId(),
                "uri": userGroupEntity.getUri(),
                "position": userGroupEntity.getPosition(),
                "permissions": userGroupEntity.getPermissions(),
                "disconnectedNodeAcknowledged": userGroupEntity.getDisconnectedNodeAcknowledged(),
                "component": userGroup
            };

            //Act
            nock(mockUrl).persist().post(`/tenants/user-groups`).reply(200, response);
            let responseUserGroup = await tenantsRequestHandler.createGroup(userGroup.identity, userGroup.users);

            //Assert
            expect(responseUserGroup).to.be.equal(response.id);
        });

    });

    describe('getGroup Test', () => {
        it('Sanity: Check getGroup', async () => {
            //Arrange
            let userGroupEntity: UserGroupEntity = new UserGroupEntityGenerator().generate();
            let userGroup: UserGroupType = userGroupEntity.getComponent();
            let response = {
                "revision": userGroupEntity.getId(),
                "id": userGroupEntity.getId(),
                "uri": userGroupEntity.getUri(),
                "position": userGroupEntity.getPosition(),
                "permissions": userGroupEntity.getPermissions(),
                "disconnectedNodeAcknowledged": userGroupEntity.getDisconnectedNodeAcknowledged(),
                "component": userGroup
            };

            //Act
            nock(mockUrl).persist().get(`/tenants/user-groups/${userGroupEntity.getId()}`).reply(200, response);
            let responseUserGroup = await tenantsRequestHandler.getGroup(userGroupEntity.getId());

            //Assert
            expect(responseUserGroup.id).to.be.equal(response.id);
        });

    });

    describe('updateGroup Test', () => {
        it('Sanity: Check updateGroup', async () => {
            //Arrange
            let userGroupEntity: UserGroupEntity = new UserGroupEntityGenerator().generate();
            let userGroup: UserGroupType = userGroupEntity.getComponent();
            let revision: RevisionType = userGroupEntity.getRevision();
            let response = {
                "revision": revision,
                "id": userGroupEntity.getId(),
                "uri": userGroupEntity.getUri(),
                "position": userGroupEntity.getPosition(),
                "permissions": userGroupEntity.getPermissions(),
                "disconnectedNodeAcknowledged": userGroupEntity.getDisconnectedNodeAcknowledged(),
                "component": userGroup
            };

            //Act
            nock(mockUrl).persist().put(`/tenants/user-groups/${userGroupEntity.getId()}`).reply(200, response);
            let responseUserGroup = await tenantsRequestHandler.updateGroup(userGroupEntity.getId(), userGroup.identity, userGroup.users, userGroup.accessPolicies, revision.version);

            //Assert
            expect(responseUserGroup.id).to.be.equal(response.id);
        });

    });

    describe('createUser Test', () => {
        it('Sanity: Check createUser', async () => {
            //Arrange
            let userEntity: UserEntity = new UserEntityGenerator().generate();
            let user: UserType = userEntity.getComponent();
            let response = {
                "revision": userEntity.getRevision(),
                "id": userEntity.getId(),
                "uri": userEntity.getUri(),
                "position": userEntity.getPosition(),
                "permissions": userEntity.getPermissions(),
                "disconnectedNodeAcknowledged": userEntity.getDisconnectedNodeAcknowledged(),
                "component": user
            };

            //Act
            nock(mockUrl).persist().post(`/tenants/users`).reply(200, response);
            let responseUser = await tenantsRequestHandler.createUser(user.identity, userEntity.getPermissions());

            //Assert
            expect(responseUser).to.be.equal(response.id);
        });

    });

    describe('getSearchResults Test', () => {
        it('Sanity: Check getSearchResults', async () => {
            //Arrange
            let tenantsEntity: TenantsEntity = new TenantsEntityGenerator().generate();
            let query: string = GlobalOperations.getRandString();
            let response = {
                "users": tenantsEntity.getUsers(),
                "userGroups": tenantsEntity.getUserGroups()
            };
            //Act
            nock(mockUrl).persist().get(`/tenants/search-results?q=${query}`).reply(200, response);
            let responseTenantsEntity = await tenantsRequestHandler.getSearchResults(query);

            //Assert
            expect(responseTenantsEntity).to.be.deep.equal(response);
        });

    });


});
