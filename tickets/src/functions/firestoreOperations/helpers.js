const functions = require('firebase-functions');
const {
	Firestore
} = require('@google-cloud/firestore');
const firestore = new Firestore();
const constants = require('./constants.json');
const Errors = require('./errors');

class Helper {

	static async createUser(accountInfo, signedUserId, userType, tenantRefId) {
		try {
			await firestore.collection(constants.DATABASE_COLLECTION.USERS_COLLECTION).doc(signedUserId).set({
				firstName: accountInfo.firstName,
				lastName: accountInfo.lastName,
				email: accountInfo.email,
				uid: signedUserId,
				tenant: tenantRefId,
				kycVerified: false,
				type: userType
			})
		} catch (e) {
			console.error(`Something went wrong creating a new user with ID ${signedUserId}. Error: ${e}`);
			Errors.throwInternalServerError();
		}

	}

	static throwError(errorCode, errorMessage) {
		throw new functions.https.HttpsError(errorCode, errorMessage);
	}

	static async getUserCollectionData(uid) {
		let userRef = await firestore.collection(constants.DATABASE_COLLECTION.USERS_COLLECTION).doc(uid);
		let userDoc = await userRef.get();
		let userData = await userDoc.data();
		return userData
	}

	static async checkForEmailExists(email) {
		const userRef = await firestore.collection(constants.DATABASE_COLLECTION.USERS_COLLECTION);
		let docSnapshot = await userRef.where('email', '==', email).get();
		return !docSnapshot.empty;
	}
}

module.exports = Helper;