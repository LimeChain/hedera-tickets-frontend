import './styles/index.css';

import React from 'react';
import { Component } from 'react';

import EventRegistrationView from './view';

class EventRegistrationComponent extends Component {

    render () {
        return (
            <div>
                {EventRegistrationView(this)}
            </div>
        );
    }

}

export default EventRegistrationComponent;
