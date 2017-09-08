import React, { Component } from 'react';

import HeaderContainer from '../header/header-container'
import ListComponent from '../body/list-component';

state of the item is for the edit here is the original. it is input stateinside item contianer called input passed down as input

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: [
                {
                    title: "Weird Dog",
                    url: "https://i.pinimg.com/736x/85/a7/f5/85a7f5cee4c93cb3995d1b51e3a0289f--stupid-dogs-crazy-stupid.jpg",
                    description: "wtf"
                },
                {
                    title: "whatever",
                    url: "http://4.bp.blogspot.com/-ddupNENL7e0/TfkBb4bK8fI/AAAAAAAABgQ/-j7K86z-YBo/s1600/mms_picture.jpg",
                    description: "wat"
                },
                {
                    title: "Weird Dog",
                    url: "https://i.pinimg.com/736x/85/a7/f5/85a7f5cee4c93cb3995d1b51e3a0289f--stupid-dogs-crazy-stupid.jpg",
                    description: "wtf"
                },
                {
                    title: "whatever",
                    url: "http://4.bp.blogspot.com/-ddupNENL7e0/TfkBb4bK8fI/AAAAAAAABgQ/-j7K86z-YBo/s1600/mms_picture.jpg",
                    description: "wat"
                }
            ]
        }
        bind others too!!!!
        this.handleDelete = this.handleDelete.bind(this);
    }
    handlePost(post){
        this.setState((prevState) => {
            let newData = [...prevState.data, post];
            return {
                data: newData
            }
        })
    }
    handleDelete(post){
        //create copy of old state
        //splice out of array
        //set new state as adjusted copy
        this.setState((prevState) => {
           let newData = [...prevState.data]; 
           change to just newData.splice instead of a new variable
           let modifiedData = newData.splice(post, 1)
           return {
               data: modifiedData
           }
        })
    }
    handleEdit(post, index){
        //replace old state with new state
        this.setState((prevState) => {
            let newData = [...prevState.data];

        })
    }
    handleEditNew(index, editedItem){
        this.setState((prevState)=>{
            let newItems = [...prevState.data];
            newItems[index] = editedItem;
            return {
                data: newItems
            }
        })
    }
    render() {
        return (
            <div>
                <HeaderContainer />
                editfunction = this.whatever BIND IT TOO
                NEED TOGGLE IN ITEM CONTAINER
                in itemcontainer : deelteitem = {this.props.whatever}item={this.props.item}input={this.state.input} index={this.state.index}
                add deletitem to listcomponent?
                set value informs to the input?
                <ListComponent data ={this.state.data}/>
            </div>
        );
    }
}

export default App;