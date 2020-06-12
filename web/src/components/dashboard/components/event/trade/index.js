import './styles/index.scss';

import React from 'react';
import { Component } from 'react';

import { BigNumber } from 'bignumber.js';
import { AES, enc } from 'crypto-js'

import { HederaSDK } from '../../../../../sdk';
import HederaAPIClient from './../../../../../clients/hedera-api'

import { TradeView } from './view';

class TradeComponent extends Component {

    state = {
        data: {
            labels: [new Date().toLocaleString()],
            datasets: [
                {
                    label: 'Sell prices',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [0]
                }
            ]
        },
        currentPrice: 0
    }

    constructor () {
        super();
        const userData = JSON.parse(localStorage.getItem('userDetails'));
        const hederaAccount = JSON.parse(localStorage.getItem('hederaAccount'));
        const privateKey = AES.decrypt(
            hederaAccount.encKey, userData.password
        ).toString(enc.Utf8);

        this.hederaSDK = HederaSDK.init(hederaAccount.name, privateKey);

        this.loadChart = this.loadChart.bind(this);
        this.buy = this.buy.bind(this);
        this.resell = this.resell.bind(this);
    }

    render () {
        return (
            <div className="trade-container">
                {TradeView(this)}
            </div>
        );
    }

    async loadChart (ticketGroupID) {
        this.ticketGroupID = ticketGroupID;

        const result = await HederaAPIClient.getSellHistory(ticketGroupID);

        const amount = await HederaAPIClient.getLastPriceForGroup(ticketGroupID);
        this.setState({
            currentPrice: amount.div(100000000).toString(),
            data: {
                labels: result.time,
                datasets: [
                    {
                        label: 'Sell prices',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: result.history
                    }
                ]
            }
        });
    }

    async buy () {
        const amount = await HederaAPIClient.getLastPriceForGroup(this.ticketGroupID);
        await this.hederaSDK.contract.buy(amount, this.ticketGroupID);
        await HederaAPIClient.updatePrice(this.ticketGroupID);

        this.loadChart(this.ticketGroupID);
    }

    async resell () {
        const amount = await HederaAPIClient.getLastPriceForGroup(this.ticketGroupID);
        const ownedTickets = await this.hederaSDK.contract.ownedTickets();

        // // 0.10 hbars cheaper
        await this.hederaSDK.contract.resell(
            this.ticketGroupID,
            0,
            (new BigNumber(amount)).minus('10000000').toString()
        );
    }
}

export default TradeComponent;
