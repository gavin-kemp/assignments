import React, { Component } from 'react';

class PostComponent extends Component {
    render() {
        return (
            <div className="col-sm-3 main-post">
                <h1>{this.props.post.title}</h1>
                <span>{this.props.post.description}</span>
                <img src={this.props.post.url} alt=""/>
                <button className="btn btn-default btn-edit">Edit</button>
                <button className="btn btn-default btn-delete">Delete</button>
            </div>
        );
    }
}

export default PostComponent;