import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div className="main-form">
                <form onSubmit={this.props.handleSubmit}>
                    <input onChange={this.props.handleInput} name="title" placeholder="Title" type="text"/>
                    <input onChange={this.props.handleInput} name="description" placeholder="Description"type="text"/>
                    <input onChange={this.props.handleInput} name="price" placeholder="Price"type="text"/>
                    <button className="btn btn-default"type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;