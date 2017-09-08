import React, { Component } from 'react';

import HeaderComponent from './header-component';

class HeaderContainer extends Component {
    constructor(){
        super();
        INPUTS?
        this.state = {
            title: "",
            url: "",
            description: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
        //call handlePost(this.state)
        //clearInputs


    }
    render() {
        return (
            <HeaderComponent handleInput = {this.handleInput}/>
        );
    }
}

export default HeaderContainer;