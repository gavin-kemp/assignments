import React, {Component} from 'react';
import ListComponent from './list-component';

import * as actionCreators from '../../redux/actions/index';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class ListContainer extends Component {
    componentDidMount(){
       //this.props.loadData()
       //pass state down via props
       //call actions
       //replace the defaultState that is located inside of the reducers 
       //reducers go back to listcontainer and you pass down the new state with props to your listcomponent 
       this.props.loadData();
    }
    render(){
        return (
            <ListComponent items={this.props.items}/>
        );
    }
}

const mapDispatchToProps = function(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
const mapStateToProps = function(state){
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)