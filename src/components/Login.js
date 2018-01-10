import React, { Component } from 'react';

import Actions from '../action/Actions';
import ErrorMessage from './partials/ErrorMessage';

class Login extends Component {
  state = {
    email: '',
    password: '',

    error: ''
  }

  render() {
    return (
      <form onSubmit={ this.logIn }>
        { this.outputErrors()}
        <label>
          Email
          <input type="email" value={ this.state.email } onChange={ this.setEmail } />
        </label>
         <label>
          Password
          <input type="password" value={ this.state.password } onChange={ this.setPassword } />
        </label>

        <input type="submit" value="Log in" />
      </form>
    );
  }

  setEmail = (e) => {
    this.setState({
      ...this.state,
      email: e.target.value,
      error: '', // When we start retyping our password, remove any residual errors
    })
  }

  setPassword = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value,
      error: '', // When we start retyping our password, remove any residual errors
    })
  }

  logIn = (e) => {
    e.preventDefault();


    if (this.state.email.trim().length === 0 || this.state.password.trim().length === 0) {
      this.setState({
        ...this.state,
        error: 'Please enter your email and password.',
      });
      return;
    }

    Actions.performLogIn(this.state.email, this.state.password);
    this.setState({
      ...this.state,
      email: '',
      password: '',
    });
  }

  outputErrors = () => {
    switch(this.props.auth.errorCode) {
      case 'auth/user-not-found':
        this.setState({
          ...this.state,
          error: 'Invalid username / password combination',
        });

        break;
      case 'auth/invalid-email':
        this.setState({
          ...this.state,
          error: 'Invalid email format, emails should take the form of [name]@[domain].[com / org / etc.] e.g. email@example.com',
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

export default Login;
