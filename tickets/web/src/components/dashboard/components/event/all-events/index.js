import './styles/index.scss';

import React from 'react';
import { Component } from 'react';

import { AllEventsView } from './view';

class AllEventsComponent extends Component {

    render () {
        return (
            <div className="events-container">
                {AllEventsView(this)}
            </div>
        );
    }

}

export default AllEventsComponent;
