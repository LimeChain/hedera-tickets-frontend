import { Component } from 'react';

class UserBaseComponent extends Component {

    state = {
        firstNameText: '',
        lastNameText: '',
        passwordText: '',
    };

    constructor () {
        super();

        this.onFirstName = this.onFirstName.bind(this);
        this.onLastName = this.onLastName.bind(this);
        this.onPassword = this.onPassword.bind(this);

        this.process = this.process.bind(this);
    }

    render () {
        return void 0;
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

        const hederaAccount = this.processUserData(userDetails);

        // Load the account into browser memory
        localStorage.setItem('userDetails', userDetails);
        localStorage.setItem('hederaAccount', hederaAccount);

        this.clearFields();
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
