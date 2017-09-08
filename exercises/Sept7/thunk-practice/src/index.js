import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import mainReducer from './redux/reducers/index';

import App from './main/app';
import thunk from 'redux-thunk';

import './index.css';

let store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById('root'));