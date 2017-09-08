import React, { Component } from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div className="main-form col-sm-12">
                <form onSubmit={this.props.handleSubmit}>
                    <input value={this.props.inputs.name}onChange={this.props.handleInputs} name="name" type="text" placeholder="First Name"/>
                    <input value={this.props.inputs.lastName}onChange={this.props.handleInputs} name="lastName" type="text" placeholder="Last name"/>
                    <input value={this.props.inputs.thing}onChange={this.props.handleInputs} name="thing"type="text" placeholder="Thing"/>
                    <button type="submit" className="btn btn-default smt-btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;