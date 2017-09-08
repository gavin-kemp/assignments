import React, { Component } from 'react';

class ItemComponent extends Component {
    capitalize(str){
        let strLength = str.length;
        let strCap = str[0].toUpperCase();
        return strCap + str.slice(1,strLength);
    }
    render() {
        
        return (
            <div className = "col-sm-3">
                <h3>{this.capitalize(this.props.pokemon.name)}</h3>
            </div>
        );
    }
}

export default ItemComponent;

// {this.props.pokemon.name}