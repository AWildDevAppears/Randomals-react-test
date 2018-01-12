import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Navigation from './Navigation';
import Login from './Login';
import Home from './Home';
import AddRandomal from './AddRandomal';

function App(props) {
  return (
    <Router>
      <React.Fragment>
        <Navigation { ...props } />
        <main className="content">
          <Switch>
            <Route path="/login" render={(routeProps) => (
              props.auth.user ? (
                <Redirect from="/login" to="/" />
              ) : (
                <Login {...routeProps} {...props} />
              )
            )} />
            <Route exact path="/" render={(routeProps) => (
              <Home {...routeProps} {...props} />
            )} />
            <Route path="/add" render={(routeProps) => (
              <AddRandomal {...routeProps} {...props}  />
            )} />
            <Route path="/my-list" render={(routeProps) => (
              <div>This is my list of randomals</div>
            )} />
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
