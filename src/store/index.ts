import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import redusers from "./redusers";

const rootReduser = combineReducers(redusers);

export const store = createStore(rootReduser, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
