import { userSignInReducers } from "../Reducers/UserSignUpReducers";
import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const allReducers = combineReducers({userSignInReducers});

export const storeData = createStore(allReducers, {}, applyMiddleware(thunk));