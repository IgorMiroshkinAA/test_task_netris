import {eventsTypes} from "../actionTypes";
import {EventsActions, EventsState} from "../types";

const initialState: EventsState = {
    pending: false,
    events: [],
    error: null
};

export default (state = initialState, action: EventsActions) => {
    switch (action.type) {
        case eventsTypes.FETCH_EVENT_REQUEST:
            return {
                ...state,
                pending: true
            };
        case eventsTypes.FETCH_EVENT_SUCCESS:
            return {
                ...state,
                pending: false,
                events: action.payload.events,
                error: null
            };
        case eventsTypes.FETCH_EVENT_FAILURE:
            return {
                ...state,
                pending: false,
                events: [],
                error: action.payload.error
            };
        default:
            return {
                ...state
            };
    }
};
