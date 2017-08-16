import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Header from './header';
import './index.css';

ReactDOM.render(
    <div>
    <Header />
    <App />
    </div>,
    document.getElementById('root')
);