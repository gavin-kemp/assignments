import React, { Component } from 'react';

import ItemComponent from "./item-component";

class ListComponent extends Component {
    genPokemon(){
        return this.props.pokemonList.map((pokemon, index)=>{
            return <ItemComponent 
            key = {index}
            pokemon ={pokemon} />
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Pokemon</h1>
                <div className="row">
                   {this.genPokemon()}
                </div>
            </div>
        );
    }
}

export default ListComponent;