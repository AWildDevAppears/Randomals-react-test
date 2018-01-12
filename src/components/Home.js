import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RandomalListView from './partials/RandomalListView';

import '../style/list.css';
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Randomals</h1>
          <p>A test app based on th concept of creating and sharing animals</p>
        </header>
        { this.displayLinks() }
        <RandomalListView {...this.props} />
      </React.Fragment>
    );
  }

  displayLinks = () => {
    if (this.props.auth.user) {
      return (
        <nav>
          <ul className="list--unstyled list--inline">
            <li className="list__item"><Link to="/add" >+ Add new Randomal</Link></li>
            <li className="list__item"><Link to="/my-list">My Randomals</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default Home;
