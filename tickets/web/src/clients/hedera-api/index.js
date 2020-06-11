import BaseClient from './../base-client';

import connection from './connection.json';

class HederaAPIClient extends BaseClient {

    constructor () {
        if (!HederaAPIClient.instance) {
            super();
            HederaAPIClient.instance = this;
        }

        return HederaAPIClient.instance;
    }

    async registerUser (userDetails) {
        const result = await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.USER.REGISTER,
            userDetails
        );

        return result.data;
    }

    async loginUser (userCredentials) {
        const result = await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.USER.LOGIN,
            userCredentials
        );

        return result.data;
    }

    async registerEvent (eventDetails) {
        await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.EVENT.CREATE,
            eventDetails
        );
    }


    async getLastAmountForGroup (groupID) {
        // Todo: implement
    }

    async getEventGroups (eventName) {
        // Todo: implement
    }
}

export default new HederaAPIClient();
