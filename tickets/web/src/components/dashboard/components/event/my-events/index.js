import './styles/index.scss';

import React from 'react';
import { Component } from 'react';

import { MyEventsView } from './view';

class MyEventsComponent extends Component {

    render () {
        return (
            <div className="events-container">
                {MyEventsView(this)}
            </div>
        );
    }

}

export default MyEventsComponent;
