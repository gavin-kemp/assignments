import React, { Component } from 'react';
import ItemComponent from './item-component';

import * as actionCreators from '../../../redux/actions/index';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class ItemContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false,
            inputs: {
                name: props.item.name,
                lastName: props.item.lastName,
                thing: props.item.thing
            }
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleToggle(){
        this.setState((prevState)=> {
            return {
                toggle: !prevState.toggle
            }
        })
    }
    handleInput(e){
        e.persist();
        this.setState((prevState) => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                [e.target.name]: e.target.value
                }
            }
        })
    }
    handleSubmit(e){
        //calls edititem()
        //preventsdefault
        e.preventDefault();
        this.props.handleEdit(this.state.inputs, this.props.index)
    }
    render() {
       
        return (
            <ItemComponent
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            toggle={this.state.toggle}
            inputs={this.state.inputs}
            handleToggle={this.handleToggle}
            deleteItem={this.props.deleteItem} 
            item = {this.props.item} 
            index={this.props.index}
            />
        );
    }
}

const mapDispatchToProps = function(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
const mapStateToProps = function(state){
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)