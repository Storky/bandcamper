import { takeEvery } from'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes';


import {
    loginUserSaga,
    testSaga,
} from './auth'

import {
    mechsSaga,
} from './mechs.js'

export function* watchAuth() {
    yield takeEvery(actionTypes.LOGIN_USER, loginUserSaga);
    yield takeEvery(actionTypes.TEST, testSaga);
}

export function* watchMechs() {
    yield takeEvery(actionTypes.WRITE_MECHS_DATA, mechsSaga);

}
