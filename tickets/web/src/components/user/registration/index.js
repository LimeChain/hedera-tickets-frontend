import './styles/index.css';

import React from 'react';
import UserBaseComponent from './../user-base';

import HederaClient from './../../../clients/hedera-api';

import { RegistrationView } from './view';

class RegistrationComponent extends UserBaseComponent {

    async componentDidMount () {
        this.process = this.process.bind(this);
    }

    render () {
        return (
            <RegistrationView />
        )
    }

    async processUserData (userDetails) {
        return HederaClient.registerUser(userDetails)
    }
}

export default RegistrationComponent;
