import './styles/index.scss';

import React from 'react';
import { Component } from 'react';

import { AllEventsView } from './view';
import EventDetailsComponent from './../event-details';

class AllEventsComponent extends Component {

    state = {
        redirect: false
    }

    constructor () {
        super();
        this.renderRedirect = this.renderRedirect.bind(this);
        this.viewEventDetails = this.viewEventDetails.bind(this);
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
            return <EventDetailsComponent />;
        }

        return AllEventsView(this);
    }

    viewEventDetails () {
        this.setState({ redirect: true });
    }
}

export default AllEventsComponent;
