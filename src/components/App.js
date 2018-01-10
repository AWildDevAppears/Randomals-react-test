import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Navigation from './Navigation';
import Login from './Login';

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
            {/* <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/> */}
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
