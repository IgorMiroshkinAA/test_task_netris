import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {fetchEventsSuccess, fetchEventsFailure} from "../actions";
import {eventsTypes} from "../actionTypes";
import {IEvent} from "../../utils/types";

const getEvents = () => {
    axios.get<IEvent[]>('https://5025y.wiremockapi.cloud/json/1')
}

function* fetchEventsSaga(): any {
    try {
        const response = yield call(getEvents);
        yield put(
            fetchEventsSuccess({
                events: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchEventsFailure({
                error: e.message
            })
        );
    }
}

function* eventsSaga() {
    yield all([takeLatest(eventsTypes.FETCH_EVENT_REQUEST, fetchEventsSaga)]);
}

export default eventsSaga;
