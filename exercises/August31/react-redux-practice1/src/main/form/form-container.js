import React, { Component } from 'react';
import FormComponent from './form-component';

import * as actionCreators from '../../redux/actions/index';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            inputs: {
                name: "",
                lastName: "",
                thing: ""
            }
        }
        this.handleInputs = this.handleInputs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputs(e){
        e.persist();
        this.setState((prevState)=>{
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
        console.log(this.state.inputs);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addItem(this.state.inputs);
        this.clearInputs();

    }
    clearInputs(){
        this.setState({
            inputs: {
                name: "",
                lastName: "",
                thing: ""
            }
        })
    }
    render() {
        return (
            <FormComponent 
            handleSubmit={this.handleSubmit} 
            handleInputs={this.handleInputs} 
            inputs={this.state.inputs}
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

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)