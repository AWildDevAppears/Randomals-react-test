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

function handleRedirects(props) {
  const to = { pathname: '/' }

  if (props.auth.user) {
    return (
      <React.Fragment>
        <Redirect from={{ pathname: '/login' }} to={to} />
        <Redirect from={{ pathname: '/signup' }} to={to} />
      </React.Fragment>
    )
  }
}

function App(props) {
  return (
    <Router>
      <React.Fragment>
        <Navigation { ...props } />
        <main>
          { handleRedirects(props) }
          <Switch>
            <Route path="/login" component={Login} { ...props } />
            <Route exact path="/" component={Home} { ...props }/>
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
