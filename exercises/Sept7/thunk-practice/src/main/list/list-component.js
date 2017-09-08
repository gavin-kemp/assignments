import React, { Component } from 'react';

import ItemContainer from './item-container';

class ListComponent extends Component {
    genItems(){
        return this.props.todos.map((todo, index) => {
            return <ItemContainer 
                todo={todo}
                index={index}
                id={todo._id}
                key={index + todo.title}
            />
        })
    }
    render() {
        return (
            <div>
                {this.genItems()}
            </div>
        );
    }
}

export default ListComponent;