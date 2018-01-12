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
import MyRandomals from './MyRandomals';
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
              <Home {...routeProps} randomals={ props.randomals.list } auth={ props.auth } />
            )} />
            <Route path="/add" render={(routeProps) => (
              <AddRandomal {...routeProps} {...props}  />
            )} />
            <Route path="/my-list" render={(routeProps) => (
              <MyRandomals
                {...routeProps}
                randomals={
                  props.auth.user ? props.randomals.list.filter((item) => item.creator === props.auth.user.uid) : []
                }
                auth={ props.auth }
              />
            )} />
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
