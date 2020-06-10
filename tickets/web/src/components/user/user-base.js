import { Component } from 'react';

class UserBaseComponent extends Component {

    state = {
        firstNameText: '',
        lastNameText: '',
        passwordText: '',
    };

    async componentDidMount () { }

    render () {
        return void 0;
    }

    onFirstName (event) {
        this.setState({ firstNameText: event.target.value });
    }

    onLastName (event) {
        this.setState({ lastNameText: event.target.value });
    }

    onPasswordName (event) {
        this.setState({ passwordText: event.target.value });
    }

    async process () {
        const userDetails = {
            firstName: super.state.firstNameText,
            lastName: super.state.lastNameText,
            password: super.state.passwordText
        };

        const hederaAccount = this.processUserData(userDetails);

        // Load the account into browser memory
        localStorage.setItem('userDetails', userDetails);
        localStorage.setItem('hederaAccount', hederaAccount);

        super.clearFields();

        // Load the account into browser memory
        // Show successful message
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
