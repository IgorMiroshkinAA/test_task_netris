import {eventsTypes} from "../actionTypes";
import {
    FetchEventsSuccess,
    FetchEventsRequest,
    FetchEventsFailure,
    FetchEventsFailurePayload,
    FetchEventsSuccessPayload
} from "../types";

export const fetchEventsRequest = (): { type: eventsTypes } => ({
    type: eventsTypes.FETCH_EVENT_REQUEST,
});

export const fetchEventsSuccess = (
    payload: FetchEventsSuccessPayload
): FetchEventsSuccess => ({
    type: eventsTypes.FETCH_EVENT_SUCCESS,
    payload
});

export const fetchEventsFailure = (
    payload: FetchEventsFailurePayload
): FetchEventsFailure => ({
    type: eventsTypes.FETCH_EVENT_FAILURE,
    payload
});
