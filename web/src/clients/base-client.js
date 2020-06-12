import axios from 'axios';

export class BaseClient {

    async executeGETRequest (url) {
        return executeRequest("GET", url);
    }

    async executePOSTRequest (url, body = {}) {
        return executeRequest("POST", url, body);
    }
}

export default BaseClient;


const executeRequest = function (method, url, body = {}) {
    return axios({
        method: method,
        url: url,
        data: body
    });
}
