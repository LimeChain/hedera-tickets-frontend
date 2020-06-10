import './styles/index.scss';

import React from 'react';
import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { HomePageView } from './view'

import LoginComponent from './../user/login';
import RegistrationComponent from './../user/registration';


class HomePage extends Component {

    state = {
        redirect: '/'
    }

    constructor () {
        super();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    render () {
        const HomePageViewRender = HomePageView.bind(this);

        return (
            <div className="application">
                {this.renderRedirect()}
                <Route exact path='/' component={HomePageViewRender}></Route>
                <Route exact path='/user/login' component={LoginComponent}></Route>
                <Route exact path='/user/registration' component={RegistrationComponent}></Route>

            </div>
        );
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
    }

    async login () {
        // Redirect to login
        this.setState({ redirect: '/user/login' });
    }

    async register () {
        // Redirect to registration
        this.setState({ redirect: '/user/registration' });
    }
}

export default HomePage;
