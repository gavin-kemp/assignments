import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-sm-2 header-title">
                        <h3>Ugly Things</h3>
                    </div>
                    <div className="col-sm-10">
                        <h4 className="title">Submit an ugly thing:</h4>
                        <form className="form-inline">
                            <input name="title" type="text" placeholder="Title" onInput={(event)=>this.props.handleInput(event)}/>
                            <input name="url" type="text" placeholder="Image URL" onInput={(event)=>this.props.handleInput(event)}/>
                            <input name="description" type="text" placeholder="Description" onInput={(event)=>this.props.handleInput(event)}/>
                            <button type="submit" className="btn btn-default submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;