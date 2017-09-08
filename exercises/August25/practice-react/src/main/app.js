import React, { Component } from 'react';

import Header from '../header/header';
import Article from '../body/article';

class App extends Component {
    constructor(){
        super();
        this.articles = [
            {title:"a dog", src: "https://www.what-dog.net/Images/faces2/scroll001.jpg", para:"whatis this"},
            {title:"whatever", src: "https://www.what-dog.net/Images/faces2/scroll0015.jpg", para:"whatis this"},
            {title:"whatever", src: "https://www.what-dog.net/Images/faces2/scroll0015.jpg", para:"whatis this"},
            {title:"whatever", src: "https://www.what-dog.net/Images/faces2/scroll0015.jpg", para:"whatis this"},
            {title:"whatever", src: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg", para:"Here is doge"}
        ];
    }
    render() {
        return (
            <div>
                <Header />  
                {this.articles.map((item)=> <Article title={item.title} src={item.src} para={item.para}/>)}
            </div>
        );
    }
}

export default App;