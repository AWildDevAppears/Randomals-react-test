import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  state = {
    navigation: {
      '/': 'Home',
      '/login': 'Log in',
      '/sign-up': 'Sign up'
    }
  }

  render() {
    return (
      <nav className="nav">
        <h1>Randomals</h1>
        <ul className="list--unstyled list--inline">
          {
            Object.keys(this.state.navigation).map((key) => <li><Link to={key}>{ this.state.navigation[key] }</Link></li>)
          }
        </ul>
      </nav>
    );
  }
}

export default Navigation;
