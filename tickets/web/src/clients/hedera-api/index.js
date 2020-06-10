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
        await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.USER.REGISTER,
            userDetails
        );
    }

    async loginUser (userCredentials) {
        await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.USER.LOGIN,
            userCredentials
        );
    }

    async registerEvent (eventDetails) {
        await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.EVENT.CREATE,
            eventDetails
        );
    }
}

export default new HederaAPIClient();
