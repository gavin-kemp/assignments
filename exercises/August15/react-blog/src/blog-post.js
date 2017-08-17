import React from 'react';

class BlogPost extends React.Component {
    render() {
        return (
            <div className="blog-wrapper">
                <h3>{this.props.post.title}</h3>
                <h6>{this.props.post.subtitle}</h6>
                <span>{this.props.post.author}</span>
                <div className="image-wrapper">
                    <img className="image-thing" src={this.props.post.image} alt="Pog"></img>
                </div>
                <p>{this.props.post.mainText}</p>
            </div>
        )
    }
}

export default BlogPost;