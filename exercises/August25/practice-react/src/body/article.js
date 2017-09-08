import React, { Component } from 'react';

class Article extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="article-main">
                <h2 className="title">{this.props.title}</h2>
                <img src={this.props.src} alt="Dog"></img>
                <p>{this.props.para}</p>
                <button className="btn btn-success">Like</button>
            </div>
        );
    }
}

export default Article;