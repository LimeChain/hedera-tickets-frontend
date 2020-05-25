const functions = require('firebase-functions');
const Helper = require('./helpers');
const UserAuthentication = require('./user-authentication');
const FireStoreService = require('./firestore-service');
const Errors = require('./errors');

const {
    createUserDataSchema,
} = require('./databaseSchemas');

let signUpUser = functions.https.onCall(async (data, context) => {
    UserAuthentication.authenticate(context);
    let uid = context.auth.uid;
    let email = context.auth.token.email;

    const user = await FireStoreService.getUser(uid);
    const users = await FireStoreService.getUsersByEmail(email);
    if (user || users.length > 0) {
        console.error(`An error ocurred while signing up user. Email address [${email}] or document with id [${uid}] already exists.`);
        Errors.throwBadRequest('User already exists');
    }

    let accountInfo = {
        firstName: data.accountInfo.firstName,
        lastName: data.accountInfo.lastName,
        email: email,
    };
    try {
        await createUserDataSchema.validateAsync(accountInfo);
    } catch (e) {
        console.error(`Error while signing up new user. Input data is not in the right format. Error: ${e}`);
        Helper.throwError('invalid-argument', 'Invalid Argument');
    }

    await Helper.createUser(accountInfo, uid);


    console.log(`Successfully created new User with ID [${uid}]`);
});

module.exports = {
    signUpUser
}