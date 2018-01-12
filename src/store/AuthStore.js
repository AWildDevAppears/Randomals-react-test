import { ReduceStore } from 'flux/utils';
import Actions from '../action/auth/Actions';
import ActionTypes from '../action/auth/ActionTypes';
import Dispatcher from '../action/Dispatcher';
import FBApp from '../Database';

let Auth = FBApp.auth();

class AuthStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  reduce(state = {}, action) {
    let s = Object.assign({}, state);

    switch (action.type) {
      case ActionTypes.ASSERT_LOGIN_STATE:
        this.assertLoginState()
        break;
      case ActionTypes.LOG_IN:
        this.attemptLogIn(action);
        break;
      case ActionTypes.LOGIN_SUCCESS:
        s.user = action.user;
        break;
      case ActionTypes.FAIL_LOG_IN:
        s.errorCode = action.code;
        break;
      case ActionTypes.SIGN_UP:
        this.attemptSignUp(action.user);
        break;
      case ActionTypes.LOG_OUT:
        Auth.signOut();
        delete s.user;
        break;
      default:
        console.log(`-- NYI - ${action.type}`);

    }
    return s;
  }

  getInitialState() {
    return {};
  }

  attemptLogIn = (action) => {
    Auth.signInWithEmailAndPassword(action.email, action.password)
      .then(Actions.onSuccessfulLogin)
      .catch((err) => {
        if (err.code) {
          Actions.onFailedLogin(err)
        }
      });
  }

  assertLoginState = () => {
    Auth.onAuthStateChanged(function(user) {
      if (user) {
        Actions.onSuccessfulLogin(user)
      }
    });
  }

  attemptSignUp = (user) => {
    FBApp.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((u) => {
      FBApp.database().ref(`users/${u.uid}`).set({
        uid: u.uid,
        email: u.email,
        username: user.username,
      });

      Actions.onSuccessfulLogin(u);
    })
    .catch((error) => {
      if (!error.code) {
        return;
      }

      Actions.onFailedLogin(error)
    });
  }
}

export default new AuthStore()
