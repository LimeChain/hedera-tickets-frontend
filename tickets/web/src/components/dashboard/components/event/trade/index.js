import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { AES, enc } from 'crypto-js'

import * as HederaSDK from '../../../../../sdk';
import HederaAPIClient from './../../../../../clients/hedera-api'

import { TradeView } from './view';

class TradeComponent extends Component {

    constructor () {
        super();
        // const userData = localStorage.getItem('userDetails');
        // const hederaAccount = localStorage.getItem('hederaAccount');
        // const privateKey = AES.decrypt(
        //     hederaAccount.encKey, userData.password
        // ).toString(enc.Utf8);

        // this.hederaSDK = HederaSDK(hederaAccount.name, privateKey);
    }

    async componentWillMount () {
        // const eventGroups = await HederaAPIClient.getEventGroups(eventName);
        this.data = [
            {
                label: 'Series 1',
                data: [
                    [0, 1],
                    [1, 2],
                    [2, 4],
                    [3, 2],
                    [4, 7],
                ],
            },
        ];
        this.axes = [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ]
    }

    render () {
        return (
            <div className="trade-container">
                {TradeView(this)}
            </div>
        );
    }
}

export default TradeComponent;
