import Config from './config/config.local';
import firebase from 'firebase';

const FBApp = firebase.initializeApp(Config);
export default FBApp;

