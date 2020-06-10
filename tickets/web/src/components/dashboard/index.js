import './styles/index.css';

import React from 'react';
import { Component } from 'react';

import { DashboardView } from './view';

class DashboardComponent extends Component {

    render () {
        console.log('here')
        return (
            <div >
                <h1>Hey</h1>
                {DashboardView(this)}
            </div>
        );
    }

}

export default DashboardComponent;
