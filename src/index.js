import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import {Container} from 'flux/utils';
import registerServiceWorker from './registerServiceWorker';

import AuthStore from './store/AuthStore';
import RandomalsStore from './store/RandomalsStore';


import AuthActions from './action/auth/Actions';
import RandomalsActions from './action/randomals/Actions';

function getStores() {
  return [
    AuthStore,
    RandomalsStore,
  ]
}

function getState() {
  return {
    auth: AuthStore.getState(),
    randomals: RandomalsStore.getState(),
  }
}

const AppContainer = Container.createFunctional(App, getStores, getState);

AuthActions.checkIfAlreadyLoggedIn();
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();



