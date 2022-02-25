import { combineReducers } from "redux";

import TodoReducers from "./TodoReducers";

const RootReducer = combineReducers({
    TodoReducers,
});

export default RootReducer;