import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { AES, enc } from 'crypto-js'

import * as HederaSDK from '../../../../../sdk';
import HederaAPIClient from './../../../../../clients/hedera-api'

import TradeComponent from './../trade';
import { EventDetailsView } from './view';

class EventDetailsComponent extends Component {

    state = {
        redirect: false
    }

    constructor () {
        super();
        // const userData = localStorage.getItem('userDetails');
        // const hederaAccount = localStorage.getItem('hederaAccount');
        // const privateKey = AES.decrypt(
        //     hederaAccount.encKey, userData.password
        // ).toString(enc.Utf8);

        // this.hederaSDK = HederaSDK(hederaAccount.name, privateKey);

        // this.buy = this.buy.bind(this);

        this.renderRedirect = this.renderRedirect.bind(this);
        this.showTradeComponent = this.showTradeComponent.bind(this);
    }

    render () {
        return (
            <div className="events-container">
                {this.renderRedirect()}
            </div>
        );
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <TradeComponent />;
        }

        return EventDetailsView(this);
    }


    async showTradeComponent () {
        this.setState({ redirect: true });
    }

    async buy (ticketGroupID) {
        // const amount = await HederaAPIClient.getLastAmountForGroup(ticketGroupID)
        // await this.hederaSDK.contract.buy(amount, ticketGroupID);
    }
}

export default EventDetailsComponent;
