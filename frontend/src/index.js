import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './wrapper';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer/reducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Wrapper />
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
