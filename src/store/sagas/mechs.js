import {select} from "@redux-saga/core/effects";
import {mechsPut, test, testPost} from "api/api";

export function* mechsSaga(action) {
    // console.log(action);
    const token = yield select((state) => state.auth.idToken);

    try {
        // const response = yield testPost(token, action.data);
        const response = yield mechsPut(token, action.data);
        // console.log(response);
    } catch (e) {
        console.log(e);
    }
}
