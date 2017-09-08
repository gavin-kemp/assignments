import React, { Component } from 'react';

import FormComponent from './form-component';
import * as actionCreators from '../../redux/actions/index';
import {connect} from 'react-redux'

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            todos: {
                title: "",
                description: ""
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
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
    handleSubmit(e){
        e.preventDefault(e);
        this.props.postData(this.state.todos);
    }
    render() {
        return (
           <FormComponent 
           handleInput ={this.handleInput}
           handleSubmit ={this.handleSubmit}
           />
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (FormContainer);