import React, { Component } from 'react';
import * as actionCreators from '../../redux/actions/index';
import {connect} from 'react-redux';

class ItemComponent extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.todo.title}</h3>
                <h4>{this.props.todo.description}</h4>
                <h4>{this.props.todo.price}</h4>
                <h4>Completed: {this.props.todo.completed ? 'True' : 'False'}</h4>
                <button className="btn btn-default">Edit</button>
                <button onClick={()=> {this.props.deleteData(this.props.id)}} className="btn btn-default">Delete</button>
                <div>
                    <form onSubmit={this.props.handleSave}>
                        <input value={this.props.inputs.title}onChange={this.props.handleInput} name="title"placeholder="Title"type="text"/>
                        <input value={this.props.inputs.description}onChange={this.props.handleInput} name="description"placeholder="Description"type="text"/>
                        <input value={this.props.inputs.price}onChange={this.props.handleInput} name="price"placeholder="Price" type="text"/>
                        <button className="btn btn-default">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

 const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (ItemComponent);