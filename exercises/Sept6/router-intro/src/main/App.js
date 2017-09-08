import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';

class App extends Component {
    render() {
        return (
            <div>
                <h1>QWE QWE QWE QWE QW</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/services" component={Services}></Route>
                </Switch>

            </div>
        );
    }
}

export default App;