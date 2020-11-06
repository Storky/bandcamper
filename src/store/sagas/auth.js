import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';
import { login } from 'api/signin.service';
import {test, testPost} from 'api/api';
import { select } from 'redux-saga/effects'

export function* loginUserSaga(action) {
    try {
        const response = yield login(action.name, action.password);

        console.log('response', response);

        if (response && response.data) {
            yield put(actions.loginSuccess(
                response.data.email,
                response.data.idToken,
                response.data.refreshToken,
            ));
        } else {
            // yield put(actions.loginFail(response.data.error));
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        // yield put(actions.loginFail('login error'));
    }
}

export function* testSaga() {
    const token = yield select((state) => state.auth.idToken);

    try {
        const response = yield testPost(token);
        // const response = yield test(token);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

// export function* ifSessionExpiredLogout({ error }) {
//     if (error && error.response && error.response.status === 401) {
//         yield put(actions.logout());
//     }
// }
