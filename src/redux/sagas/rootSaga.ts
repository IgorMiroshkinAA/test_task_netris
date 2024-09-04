import {all, fork} from "redux-saga/effects";
import eventsSaga from "./index";

export function* rootSaga() {
    yield all([fork(eventsSaga)]);
}
