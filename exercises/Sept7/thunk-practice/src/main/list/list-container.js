import React, { Component } from 'react';

import ListComponent from './list-component';
import {connect} from 'react-redux';
import * as actionCreators from '../../redux/actions/index';

class ListContainer extends Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        console.log(this.props);
        return (
            <ListComponent 
                todos={this.props.todos}
                handleDelete={this.handleDelete}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(ListContainer);