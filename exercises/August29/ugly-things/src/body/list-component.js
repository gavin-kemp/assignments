import React, { Component } from 'react';

import PostContainer from './post/post-container';

class ListComponent extends Component {
    generatePost(){
        return this.props.data.map((post, index) => {
            return <PostContainer post={post} key={index} index={index}/>
        })
    }
    render() {
        return (
            <div>
                {this.generatePost()}
            </div>
        );
    }
}

export default ListComponent;