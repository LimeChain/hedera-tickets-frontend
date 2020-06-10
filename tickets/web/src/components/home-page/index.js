import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { HomePageView } from './view'

import LoginComponent from './../user/login';
import RegistrationComponent from './../user/registration';


class HomePage extends Component {

    state = {
        redirect: null
    }

    constructor () {
        super();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    render () {
        return (
            <div className="application">
                {this.renderRedirect()}
            </div>
        );
    }

    renderRedirect = () => {
        if (!this.state.redirect) {
            return HomePageView(this);
        }

        return this.state.redirect;
    }

    async login () {
        // Redirect to login
        this.setState({ redirect: <LoginComponent /> });
    }

    async register () {
        // Redirect to registration
        this.setState({ redirect: <RegistrationComponent /> });
    }
}

export default HomePage;
