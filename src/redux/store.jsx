import {createStore, applyMiddleware, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger' // to see redux on the console
import {composeWithDevTools} from "redux-devtools-extension"

import { getCoinsListReducer } from "./reducers/getCoinsList_Reducer"

const rootReducer = combineReducers ({
    getCoinsListReducer: getCoinsListReducer, // get info about crypto coins from api
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [logger, sagaMiddleware]

export const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
)