import React, { Component } from 'react';
import Actions from '../action/Actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <form onSubmit={ this.logIn }>
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
    })
  }

  setPassword = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value,
    })
  }

  logIn = (e) => {
    e.preventDefault();
    Actions.performLogIn(this.state.email, this.state.password);
    this.setState({
      ...this.state,
      email: '',
      password: '',
    });
  }
}

export default Login;
