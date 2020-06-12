import BigNumber from 'bignumber.js'

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

    async updatePrice (ticketGroupID) {
        await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.EVENT.UPDATE_PRICE,
            { group: ticketGroupID }
        );
    }

    async getLastPriceForGroup (groupID) {
        const result = await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.EVENT.PRICE,
            { group: groupID }
        )
        return new BigNumber(result.data)
    }

    async getSellHistory (groupID) {
        const result = await super.executePOSTRequest(
            connection.url + connection.ENDPOINTS.EVENT.HISTORY,
            { group: groupID }
        )

        console.log(result)

        return result.data
    }
}

export default new HederaAPIClient();
