export function x(x, y) {
  return {
    type: '@act/x',
    payload: { x, y }
  };
}

export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data }
  };
}
export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile }
  };
}
export function updateProfileFailure(data) {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
    payload: { data }
  };
}
