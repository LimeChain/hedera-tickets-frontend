const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const firebaseOperations = require('./firestoreOperations/index');

exports.signUpUser = firebaseOperations.signUpUser;