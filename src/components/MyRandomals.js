import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RandomalListView from './partials/RandomalListView';
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>My Randomals</h1>
          <p>A test app based on th concept of creating and sharing animals</p>
          <h2> All Randomals </h2>
        </header>
        <nav>
        { this.displayLinks() }
      </nav>
        <RandomalListView {...this.props} />
      </React.Fragment>
    );
  }

  displayLinks = () => {
    if (this.props.auth.user) {
      return(
        <ul className="list--unstyled list--inline">
          <li className="list__item"><Link to="/add" >+ Add new Randomal</Link></li>
          <li className="list__item"><Link to="/" >All Randomals</Link></li>
        </ul>
      )
    }
  }
}

export default Home;
