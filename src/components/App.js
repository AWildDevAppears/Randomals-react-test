import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Navigation from './partials/Navigation';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
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
            <Route path="/sign-up" render={(routeProps) => (
              props.auth.user ? (
                <Redirect from="/sign-up" to="/" />
              ) : (
                <SignUp {...routeProps} {...props} />
              )
            )} />
            <Route exact path="/" render={(routeProps) => (
              <Home {...routeProps} randomals={ props.randomals.list } auth={ props.auth } />
            )} />
            <Route path="/add" render={(routeProps) => (
              props.auth.user ? (
                <AddRandomal {...routeProps} {...props} />
              ) : (
                <Redirect to="/login" />
              )
            )} />
            <Route path="/my-list" render={(routeProps) => (
              props.auth.user ? (
                <MyRandomals
                  {...routeProps}
                  randomals={
                    props.auth.user ? props.randomals.list.filter((item) => item.creator === props.auth.user.uid) : []
                  }
                  auth={ props.auth }
                />
              ) : (
                <Redirect to="/login" />
              )
            )} />
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
