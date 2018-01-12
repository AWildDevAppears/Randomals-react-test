const login = {
  LOG_IN: 'LOG_IN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  FAIL_LOG_IN: 'FAIL_LOG_IN',
  ASSERT_LOGIN_STATE: 'ASSERT_LOGIN_STATE',
};

const logout = {
  LOG_OUT: 'LOG_OUT',
};

const signUp = {
  SIGN_UP: 'SIGN_UP',
  FAIL_SIGN_UP: 'FAIL_SIGN_UP',
};

const ActionTypes = {
  ...login,
  ...logout,
  ...signUp,
}

export default ActionTypes;


