import React from 'react';
import { Component } from 'react';

import DashboardComponent from './../dashboard';

class UserBaseComponent extends Component {

    state = {
        firstNameText: '',
        lastNameText: '',
        passwordText: '',
        redirect: false
    };

    constructor (view) {
        super();
        this.view = view;

        this.renderRedirect = this.renderRedirect.bind(this);

        this.onFirstName = this.onFirstName.bind(this);
        this.onLastName = this.onLastName.bind(this);
        this.onPassword = this.onPassword.bind(this);

        this.process = this.process.bind(this);
    }

    render () {
        return (
            <div >
                {this.renderRedirect()}
            </div>

        );
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <DashboardComponent />
        }

        return this.view(this);
    }

    onFirstName (event) {
        this.setState({ firstNameText: event.target.value });
    }

    onLastName (event) {
        this.setState({ lastNameText: event.target.value });
    }

    onPassword (event) {
        this.setState({ passwordText: event.target.value });
    }

    async process () {
        const userDetails = {
            firstName: this.state.firstNameText,
            lastName: this.state.lastNameText,
            password: this.state.passwordText
        };

        // const hederaAccount = this.processUserData(userDetails);

        // Load the account into browser memory
        // localStorage.setItem('userDetails', userDetails);
        // localStorage.setItem('hederaAccount', hederaAccount);

        this.setState({ redirect: true });
    }

    async processUserData () { }

    clearFields () {
        this.setState({
            firstNameText: '',
            lastNameText: '',
            passwordText: ''
        });
    }
}

export default UserBaseComponent;
