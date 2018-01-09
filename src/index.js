import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import {Container} from 'flux/utils';
import registerServiceWorker from './registerServiceWorker';

import AuthStore from './store/AuthStore';
import Actions from './action/Actions';

function getStores() {
  return [
    AuthStore,
  ]
}

function getState() {
  return {
    auth: AuthStore.getState(),
  }
}

const AppContainer = Container.createFunctional(App, getStores, getState);

Actions.checkIfAlreadyLoggedIn();
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();



