import {combineReducers} from "redux";
import eventReducer from "./index";

const rootReducer = combineReducers({
    events: eventReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
