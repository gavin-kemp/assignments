import React, { Component } from 'react';

import data from '../../data';

class Service extends Component {
    render() {
        console.log(this.props);
        let index = this.props.match.params.index;
        return (
            <div className="item">
                <h3>{data[index].name}</h3>
                <h4>{data[index].description}</h4>
            </div>
        );
    }
}

export default Service;