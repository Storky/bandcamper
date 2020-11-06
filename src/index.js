import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from 'store/reducers/auth'
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from 'store/sagas';
import { Provider } from 'react-redux';
import {watchMechs} from "store/sagas/index";


const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
    auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchMechs);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
