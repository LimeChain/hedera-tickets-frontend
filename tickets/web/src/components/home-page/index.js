import './styles/index.scss';

import React from 'react';

import { Component } from 'react';

import { HomePageView } from './view'

class HomePage extends Component {

    constructor () {
        super();
    }

    async componentDidMount () {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    render () {
        return (
            <div className="application">
                <h1 className="title" style={{ backgroundImage: "url(../img)" }}>EventCo platform</h1>
                {HomePageView(this)}
            </div>
        );
    }

    async login () {
        // Navigate to login
    }

    async register () {
        // Navigate to registration
    }
}

export default HomePage;
