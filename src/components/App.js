import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from './Navigation';
import Login from './Login';

function App(props) {
  return (
    <Router>
      <React.Fragment>
        <Navigation { ...props } />
        <main>
          <Route path="/login" component={Login} { ...props } />
          {/* <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/> */}
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
