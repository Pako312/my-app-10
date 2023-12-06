import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { cashReducer } from "./cash/reducer";

const rootReducer = combineReducers(
    {
        counterReducer,
        cashReducer
    })

export const store = createStore(rootReducer, composeWithDevTools())
