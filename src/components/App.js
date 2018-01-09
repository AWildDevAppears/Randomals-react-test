import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <main>
            {/* <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/> */}
          </main>
        </React.Fragment>
      </Router>
    );
  }
}



export default App;
