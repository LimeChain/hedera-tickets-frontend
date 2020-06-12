import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { AES, enc } from 'crypto-js'

import { HederaSDK } from '../../../../../sdk';

import { MyTicketsView } from './view';

class MyTicketsComponent extends Component {

    state = {
        tickets: []
    }

    async componentDidMount () {
        const userData = JSON.parse(localStorage.getItem('userDetails'));
        const hederaAccount = JSON.parse(localStorage.getItem('hederaAccount'));
        const privateKey = AES.decrypt(
            hederaAccount.encKey, userData.password
        ).toString(enc.Utf8);

        this.hederaSDK = HederaSDK.init(hederaAccount.name, privateKey);
        this.refund = this.refund.bind(this);

        this.setState({
            tickets: await this.hederaSDK.contract.ownedTickets()
        });
    }


    render () {
        return (
            <div className="events-container">
                {MyTicketsView(this)}
            </div>
        );
    }

    async refund (group, id) {
        await this.hederaSDK.contract.refund(group, id);
        this.state.tickets[group][id] = 0;
        this.setState({
            tickets: this.state.tickets
        })
    }
}

export default MyTicketsComponent;
