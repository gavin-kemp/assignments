import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div className="item-comp col-sm-12">
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.lastName}</p>
                <p>{this.props.item.thing}</p>
                <button onClick={this.props.handleToggle} className="btn btn-default edit-btn">Edit</button>
                <button onClick={() => { this.props.deleteItem(this.props.index) }} className="btn btn-default del-btn">Delete</button>
                <form onSubmit={this.props.handleSubmit} className={this.props.toggle ? "show" : "hide"}>
                    <div className="edit-form">
                        <input onChange={this.props.handleInput} value={this.props.inputs.name} name="name" type="text" />
                        <input onChange={this.props.handleInput} value={this.props.inputs.lastName} name="lastName" type="text" />
                        <input onChange={this.props.handleInput} value={this.props.inputs.thing} name="thing" type="text" />
                        <button type="submit" className="btn btn-default">Submit Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ItemComponent;