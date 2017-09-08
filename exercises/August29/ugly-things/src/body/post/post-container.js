import React, { Component } from 'react';

import PostComponent from './post-component';

class PostContainer extends Component {
    render() {
        return (
            <PostComponent post={this.props.post}/>
        );
    }
}

export default PostContainer;






