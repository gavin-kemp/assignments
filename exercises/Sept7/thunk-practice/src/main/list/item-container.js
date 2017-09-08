import React, { Component } from 'react';

import ItemComponent from './item-component';
import * as actionCreators from '../../redux/actions/index';
import {connect} from 'react-redux';

class ItemContainer extends Component {
    constructor(props){
        super();
        this.state = {
            toggled: false,
            todos: {
                title: props.todo.title,
                description: props.todo.description,
                price: props.todo.price
            }
        }
    }
    handleInput = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                todos: {
                    ...prevState.todos,
                    [e.target.name]: e.target.value
                }
            }
        })
        console.log(this.state.todos)
    }
    handleSave = (e) => {
        e.preventDefault();
        this.props.editData(this.state.todos,this.props.id)
    }
    render() {
        return (
            <ItemComponent 
            todo ={this.props.todo}
            index={this.props.index}
            id={this.props.id}
            handleInput={this.handleInput}
            handleSave={this.handleSave}
            inputs={this.state.todos}
            />
        );
    }
}
const  mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(ItemContainer)