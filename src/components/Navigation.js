import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AuthStore from '../store/AuthStore';
import Actions from '../action/auth/Actions';


class Navigation extends Component {
  state = {
    auth: AuthStore.getState(),
    navigation: {
      '/': 'Home',
    },
    loggedOut: {
      '/login': 'Log in',
      '/sign-up': 'Sign up',
    },
    loggedIn: {}
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
    return <li key={key}><Link to={key}>{ this.state.navigation[key] }</Link></li>
  }

  outputConditionalLinks = () => {
    let items = [];

    if (this.props.auth.user) {
      for (let key in this.state.loggedIn) {
        items.push(<li key={key}><Link to={key}>{ this.state.loggedIn[key] }</Link></li>);
      }
      items.push(<button key="log-out" onClick={Actions.performLogOut}>Log out</button>);
    } else {
      for (let key in this.state.loggedOut) {
        items.push(<li key={key}><Link to={key}>{ this.state.loggedOut[key] }</Link></li>);
      }
    }

    return items;
  }
}

export default Navigation;
