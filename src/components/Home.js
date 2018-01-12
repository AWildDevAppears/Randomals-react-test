import React, { Component } from 'react';

import RandomalListView from './partials/RandomalListView';
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Randomals</h1>
          <p>A test app based on th concept of creating and sharing animals</p>
        </header>
        <RandomalListView {...this.props} />
      </React.Fragment>
    );
  }
}

export default Home;
