import React from 'react';
import ReactDOM from 'react-dom';

//create something that will let you add things to the list
//create something that wil let you edit things on the list
//add formcontainer to add to the list and toggle form for editing

import App from './main/app';
import './index.css';

//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import mainReducer from './redux/reducers/index.js';

let store = createStore(mainReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)