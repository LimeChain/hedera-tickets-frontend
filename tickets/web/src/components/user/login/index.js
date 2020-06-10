import './styles/index.css';

import React from 'react';
import UserBaseComponent from './../user-base';

import { LoginView } from './view';

import HederaClient from './../../../clients/hedera-api';

class LoginComponent extends UserBaseComponent {

    constructor () {
        super(LoginView);
    }

    async processUserData (userDetails) {
        return HederaClient.loginUser(userDetails)
    }
}

export default LoginComponent;
