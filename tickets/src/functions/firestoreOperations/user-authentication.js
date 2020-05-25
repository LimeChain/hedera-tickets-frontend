const functions = require('firebase-functions');

class UserAuthentication {

	static authenticate(context) {
		if (!context.auth) {
			this.throwError('unauthenticated', 'The function must be called ' +
				'only from authenticated users.');
		}
	}

	static throwError(errorCode, errorMessage) {
		throw new functions.https.HttpsError(errorCode, errorMessage);
	}

}

module.exports = UserAuthentication;