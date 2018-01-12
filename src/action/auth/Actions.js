import ActionTypes from './ActionTypes'
import Dispatcher from '../Dispatcher'

const Actions = {
  checkIfAlreadyLoggedIn() {
    Dispatcher.dispatch({
      type: ActionTypes.ASSERT_LOGIN_STATE,
    });
  },

  performLogIn(email, password) {
    Dispatcher.dispatch({
      type: ActionTypes.LOG_IN,
      email,
      password,
    });
  },

  performLogOut() {
    Dispatcher.dispatch({
      type: ActionTypes.LOG_OUT,
    });
  },

  performSignUp() {
    Dispatcher.dispatch({
      type: ActionTypes.SIGN_UP,
    });
  },

  onSuccessfulLogin(user) {
     Dispatcher.dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      user,
    });
  },

  onFailedLogin(err) {
    Dispatcher.dispatch({
      ...err,
      type: ActionTypes.FAIL_LOG_IN,
    });
  },

  onAttemptLoginWithoutCredentials() {
    Dispatcher.dispatch({
      type: ActionTypes.FAIL_LOGIN_MISSING_DATA
    });
  }
}

export default Actions;
