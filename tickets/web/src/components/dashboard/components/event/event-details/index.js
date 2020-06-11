import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { AES, enc } from 'crypto-js'

import * as HederaSDK from '../../../../../sdk';
import HederaAPIClient from './../../../../../clients/hedera-api'

import { EventDetailsView } from './view';

class EventDetailsComponent extends Component {

    constructor () {
        super();
        // const userData = localStorage.getItem('userDetails');
        // const hederaAccount = localStorage.getItem('hederaAccount');
        // const privateKey = AES.decrypt(
        //     hederaAccount.encKey, userData.password
        // ).toString(enc.Utf8);

        // this.hederaSDK = HederaSDK(hederaAccount.name, privateKey);

        this.buy = this.buy.bind(this);
    }

    render () {
        return (
            <div className="events-container">
                {EventDetailsView(this)}
            </div>
        );
    }

    // Todo: Move in into another page
    // async loadChart (eventName) {
    //     // Todo: get event tickets prices
    //     const eventGroups = await HederaAPIClient.getEventGroups(eventName);
    //     this.data = [
    //         {
    //             label: 'Series 1',
    //             data: [
    //                 [0, 1],
    //                 [1, 2],
    //                 [2, 4],
    //                 [3, 2],
    //                 [4, 7],
    //             ],
    //         },
    //     ];
    //     this.axes = [
    //         { primary: true, type: 'linear', position: 'bottom' },
    //         { type: 'linear', position: 'left' },
    //     ]
    // }

    async buy (ticketGroupID) {
        // const amount = await HederaAPIClient.getLastAmountForGroup(ticketGroupID)
        // await this.hederaSDK.contract.buy(amount, ticketGroupID);
    }
}

export default EventDetailsComponent;
