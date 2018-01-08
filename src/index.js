import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { connect } from 'react-firebase';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import Config from './config/config.local.js';

firebase.initializeApp(Config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

