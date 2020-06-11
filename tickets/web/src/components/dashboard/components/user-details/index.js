import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { AES, enc } from 'crypto-js'

import { UserDetailsView } from './view';

import * as HederaSDK from '../../../../sdk';

class UserDetailsComponent extends Component {

    state = {
        balance: 0
    }

    async componentDidMount () {
        // const userData = localStorage.getItem('userDetails');
        // const hederaAccount = localStorage.getItem('hederaAccount');
        // const privateKey = AES.decrypt(
        //     hederaAccount.encKey, userData.password
        // ).toString(enc.Utf8);

        // this.hederaSDK = HederaSDK(hederaAccount.name, privateKey);
        // this.setState({ balance: await this.hederaSDK.contract.withdrawalBalance() });
    }

    render () {
        return (
            <div>
                {UserDetailsView(this)}
            </div>
        );
    }

    async withdraw () {
        // await this.hederaSDK.contract.withdraw();
        // this.setState({ balance: 0 });
    }
}

export default UserDetailsComponent;
