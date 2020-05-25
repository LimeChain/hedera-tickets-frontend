const functions = require('firebase-functions');

class Errors {

    /**
     * Throws Error 500 - Internal Server Error
     */
    static throwInternalServerError() {
        throw this._baseError('internal', 'Internal Server Error');
    }

    /**
     * Throws Error 400 - Bad Request with custom message
     */
    static throwBadRequest(msg) {
        throw this._baseError('failed-precondition', msg)
    }

    /**
     * Throws Error 401 - Unauthenticated
     */
    static throwUnauthenticated() {
        throw this._baseError('unauthenticated', 'unauthenticated');
    }

    /**
     * @param errorCode
     * @param errorMessage
     * @returns {HttpsError}
     * @private
     */
    static _baseError(errorCode, errorMessage) {
        return new functions.https.HttpsError(errorCode, errorMessage);
    }
}

module.exports = Errors;