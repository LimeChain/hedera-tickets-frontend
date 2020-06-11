import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { AES, enc } from 'crypto-js'

import * as HederaSDK from '../../../../../sdk';

import { MyTicketsView } from './view';

class MyTicketsComponent extends Component {


    async componentDidMount () {
        // const userData = localStorage.getItem('userDetails');
        // const hederaAccount = localStorage.getItem('hederaAccount');
        // const privateKey = AES.decrypt(
        //     hederaAccount.encKey, userData.password
        // ).toString(enc.Utf8);

        // this.hederaSDK = HederaSDK(hederaAccount.name, privateKey);
        // this.tickets = await this.hederaSDK.contract.ownedTickets();
        this.refund = this.refund.bind(this);
    }


    render () {
        return (
            <div className="events-container">
                {MyTicketsView(this)}
            </div>
        );
    }

    async refund (ticket) {
        // await this.hederaSDK.contract.refund(ticket.group, ticket.id);
    }

}

export default MyTicketsComponent;
