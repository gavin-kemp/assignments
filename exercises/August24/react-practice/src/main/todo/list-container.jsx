import React, { Component } from 'react';

import ListComponent from "./list-component";
import axios from "axios";

const url = "https://api.vschool.io/Ben/todo";

class ListContainer extends Component {
    constructor(){
        super();
        this.state = {
            pokemonList : []
        }
    }
    loadData(){
        axios.get(url).then((response) => {
            this.setState({
                pokemonList : response.data.results
            })
            console.log(this.pokemonList);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    componentWillMount(){
        this.loadData();
    }
    render() {
        return (
            <ListComponent 
            pokemonList = {this.state.pokemonList}/>
        );
    }
}

export default ListContainer;