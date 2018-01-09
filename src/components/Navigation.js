import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  state = {
    navigation: {
      '/': 'Home',
    },
    loggedOut: {
      '/login': 'Log in',
      '/sign-up': 'Sign up',
    },
    loggedIn: {
      '/logout': 'Log out',
    }
  }

  render() {
    return (
      <nav className="nav">
        <h1>Randomals</h1>
        <ul className="list--unstyled list--inline">
          { Object.keys(this.state.navigation).map(this.createMenuLink) }
          { this.outputConditionalLinks() }
        </ul>
      </nav>
    );
  }
  createMenuLink = (key) => {
    return <li><Link to={key}>{ this.state.navigation[key] }</Link></li>
  }

  outputConditionalLinks = () => {
    let items = [];

    if (true) {
      for (let key in this.state.loggedOut) {
        items.push(<li><Link to={key}>{ this.state.loggedOut[key] }</Link></li>);
      }
    }

    return items;
  }
}

export default Navigation;
