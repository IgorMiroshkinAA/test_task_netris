import {IEvent} from "../utils/types";
import {eventsTypes} from "./actionTypes";

export interface EventsState {
    pending: boolean;
    events: IEvent[];
    error: string | null;
}

export interface FetchEventsSuccessPayload {
    events: IEvent[];
}

export interface FetchEventsFailurePayload {
    error: string;
}

export interface FetchEventsRequest {
    type: typeof eventsTypes.FETCH_EVENT_REQUEST;
}

export type FetchEventsSuccess = {
    type: typeof eventsTypes.FETCH_EVENT_SUCCESS;
    payload: FetchEventsSuccessPayload;
};

export type FetchEventsFailure = {
    type: typeof eventsTypes.FETCH_EVENT_FAILURE
    payload: FetchEventsFailurePayload;
};

export type EventsActions =
    | FetchEventsRequest
    | FetchEventsSuccess
    | FetchEventsFailure;
