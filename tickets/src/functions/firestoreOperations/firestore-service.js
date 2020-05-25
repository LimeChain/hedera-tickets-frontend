const {
    Firestore
} = require('@google-cloud/firestore');
const firestore = new Firestore();
const constants = require('./constants');

class FirestoreService {

    /**
     * Returns User from Firestore by a given UserID. Returns null if user does not exist with the given ID
     * @param userId
     * @returns {Promise<null || {object}>}
     */
    static async getUser(userId) {
        const userReference = firestore.collection(constants.DATABASE_COLLECTION.USERS_COLLECTION).doc(userId);
        const userDoc = await userReference.get();
        return userDoc.data();
    }

    /**
     * Returns Users from Firestore by a given email
     * @param getUsersByEmail
     * @returns {Promise<{array}>}
     */
    static async getUsersByEmail(email) {
        const usersCollection = firestore.collection(constants.DATABASE_COLLECTION.USERS_COLLECTION);
        const usersDocs = await usersCollection.where('email', '==', email).get();

        let users = [];
        usersDocs.forEach(doc => {
            users.push(doc.data());
        });

        return users
    }

}

module.exports = FirestoreService;