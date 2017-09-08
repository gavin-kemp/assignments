import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import data from '../../data';

import Service from './Service';


class Services extends Component {
    genLinks(){
       return data.map((card, index) => {
            return <li key={index}><Link to={`/services/${index}`}>{card.name}</Link></li>
        })
    }
    render() {
        return (
            <div>
                <h1 className="route-header">Services</h1>
                <ul>
                    {this.genLinks()}
                </ul>
                <Switch>
                    <Route path="/services/:index" component={Service} />
                </Switch>
            </div>
        );
    }
}

export default Services;