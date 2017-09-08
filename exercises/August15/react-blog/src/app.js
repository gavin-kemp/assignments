import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './header';
// import './index.css';
import BlogPost from './blog-post';
import Footer from './footer';
// import Navbar from './navbar'

//in header render all list items in navbar list the same as posts

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Header />
                {this.genPosts()}
                <Footer />
            </div>
        )
    }
}

export default App;