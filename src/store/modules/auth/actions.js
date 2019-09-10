export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password }
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user }
  };
}

/**
 * action used for both login and register
 */
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}
