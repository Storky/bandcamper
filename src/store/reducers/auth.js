import * as actionTypes from '../actions/actionTypes';
import { updateObject } from 'shared/utilities/objectManager';

const authLSKeys = {
    email: 'email',
    idToken: 'idToken',
    refreshToken: 'refreshToken',
};

const initialState = {
    email: localStorage.getItem(authLSKeys.email) || null,
    idToken: localStorage.getItem(authLSKeys.idToken) || null,
    refreshToken: localStorage.getItem(authLSKeys.refreshToken) || null,

    error: '',
};

const loginSuccess = (state, action) => {
    localStorage.setItem(authLSKeys.email, action.email);
    localStorage.setItem(authLSKeys.idToken, action.idToken);
    localStorage.setItem(authLSKeys.refreshToken, action.refreshToken);

    return updateObject( state, {
        email: action.email,
        idToken: action.idToken,
        refreshToken: action.refreshToken,
        error: null,
     } );
};

const logout = (state) => {
    console.log('logout');
    localStorage.removeItem(authLSKeys.email);
    localStorage.removeItem(authLSKeys.idToken);
    localStorage.removeItem(authLSKeys.refreshToken);

    return updateObject(state, {
        email: null,
        idToken: null,
        refreshToken: null,
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGOUT_USER: return logout(state, action);
        // case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        // case actionTypes.LOGIN_LOGOUT: return loginLogout(state, action);
        // case actionTypes.CLEAR_LOGIN_ERROR: return clearAuthError(state, action);
        default:
            return state;
    }
};

export default reducer;
