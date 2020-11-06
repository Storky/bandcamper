import * as actionTypes from "./actionTypes";

export const login = (name, password) => {
    return {
        type: actionTypes.LOGIN_USER,
        name: name,
        password: password,
    };
};

export const loginSuccess = (email, idToken, refreshToken) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
      email,
      idToken,
      refreshToken,
  };
};
//
// export const loginFail = error => {
//   return {
//     type: actionTypes.LOGIN_FAIL,
//     error: error
//   };
// };
//
export const logout = () => {
  return {
    type: actionTypes.LOGOUT_USER
  };
};

export const test = (idToken) => {
    return {
        type: actionTypes.TEST,
        idToken,
    }
};
//
// export const logoutSucceed = () => {
//   return {
//     type: actionTypes.LOGIN_LOGOUT
//   };
// };
//
// export const ifSessionExpiredLogout = error => ({
//     type: actionTypes.IF_SESSION_EXPIRED_LOGOUT,
//     error,
// });
//
// export const clearAuthError = () => ({
//     type: actionTypes.CLEAR_LOGIN_ERROR,
// });
