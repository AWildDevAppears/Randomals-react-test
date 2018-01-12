import React, { Component } from 'react';

import Actions from '../action/auth/Actions';
import ErrorMessage from './partials/ErrorMessage';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    username: '',

    error: '',
  }

  render() {
    return (
      <form onSubmit={ this.signUp }>
        { this.outputErrors()}
        <label>
          Username
          <input type="text" name="username" value={ this.state.username } onChange={ this.setValue } />
        </label>
        <label>
          Email
          <input type="email" name="email" value={ this.state.email } onChange={ this.setValue } />
        </label>
         <label>
          Password
          <input type="password" name="password" value={ this.state.password } onChange={ this.setValue } />
        </label>

        <input type="submit" value="Sign up" />
      </form>
    );
  }

  setValue = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  signUp = (e) => {
    e.preventDefault();

    if (
      this.state.username.trim().length === 0 ||
      this.state.email.trim().length === 0 ||
      this.state.password.trim().length === 0
    ) {
      this.setState({
        ...this.state,
        error: 'Please enter an email, a password and a username',
      });
      return;
    }

    Actions.performSignUp({
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    })

    this.setState({
      ...this.state,
      username: '',
      password: '',
      email: '',
    });
  }

  outputErrors = () => {
    switch(this.props.auth.errorCode) {
      case 'auth/email-already-in-use':
        this.setState({
          ...this.state,
          error: 'Email already in use, cannot create an account with the provided email',
        });

        break;
      case 'auth/weak-password':
        this.setState({
          ...this.state,
          error: 'Password too weak, please make sure to use at least 8 characters',
        });

        break;
      case '':
        break;
      default:
        this.setState({
          ...this.state,
          error: this.props.auth.errorCode,
        });
    }

    this.props.auth.errorCode = '';

    if (this.state.error) {
      return (
        <ErrorMessage>
          { this.state.error }
        </ErrorMessage>
      )
    }
  }
}

export default SignUp;
