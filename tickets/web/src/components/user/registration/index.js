import './styles/index.css';

import React from 'react';
import UserBaseComponent from './../user-base';

import HederaClient from './../../../clients/hedera-api';

import { RegistrationView } from './view';

class RegistrationComponent extends UserBaseComponent {

    render () {
        return (
            <div>
                {RegistrationView(this)}
            </div>
        )
    }

    async processUserData (userDetails) {
        return HederaClient.registerUser(userDetails)
    }
}

export default RegistrationComponent;
