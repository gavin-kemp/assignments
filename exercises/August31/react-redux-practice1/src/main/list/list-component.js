import React, { Component } from 'react';
import ItemContainer from './item/item-container';

class ListComponent extends Component {
    genList(){
       return this.props.items.map((item, index)=> {
            return <ItemContainer key={index + item.name} item={item}index={index}/>
        })
    }
    render() {
        return (
            <div>
                {this.genList()}
            </div>
        )
    }
}

export default ListComponent;