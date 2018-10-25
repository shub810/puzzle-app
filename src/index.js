import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddlerware from 'redux-promise';
import { Provider } from 'react-redux';
import allReducers from "./reducers/index";

const store = applyMiddleware(promiseMiddlerware)(createStore)(allReducers);

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
