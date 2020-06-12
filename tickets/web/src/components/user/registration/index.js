import './styles/index.css';

import React from 'react';
import UserBaseComponent from './../user-base';

import HederaClient from './../../../clients/hedera-api';

import { RegistrationView } from './view';

class RegistrationComponent extends UserBaseComponent {

    constructor () {
        super(RegistrationView);
    }

    async processUserData (userDetails) {
        return HederaClient.registerUser(userDetails)
    }
}

export default RegistrationComponent;
