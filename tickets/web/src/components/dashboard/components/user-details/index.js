import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { AES, enc } from 'crypto-js'

import { UserDetailsView } from './view';

import { HederaSDK } from '../../../../sdk';

class UserDetailsComponent extends Component {

    state = {
        balance: 0
    }

    async componentWillMount () {
        this.userData = JSON.parse(localStorage.getItem('userDetails'));
        const hederaAccount = JSON.parse(localStorage.getItem('hederaAccount'));
        const privateKey = AES.decrypt(
            hederaAccount.encKey, this.userData.password
        ).toString(enc.Utf8);

        this.hederaSDK = HederaSDK.init(hederaAccount.name, privateKey);

        this.withdraw = this.withdraw.bind(this);
        this.setState({
            balance: await this.hederaSDK.contract.withdrawalBalance()
        })
    }

    render () {
        return (
            <div>
                {UserDetailsView(this)}
            </div>
        );
    }

    async withdraw () {
        await this.hederaSDK.contract.withdraw();
        this.setState({ balance: 0 });
    }
}

export default UserDetailsComponent;
