import axios from 'axios';

const url = "https://api.vschool.io/gavin/todo/";

export function loadData(){
    return (dispatch) => {
        axios.get(url).then((response) => {
            let todos = response.data;
            dispatch(setData(todos))
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function setData(todos){
    return {
        type: "SET_DATA",
        todos,
    }
}

export function deleteData(id){
    return (dispatch) => {
        axios.delete(url + id).then((response) => {
            dispatch(loadData())
        })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function editData(editedTodo, id) {
    return (dispatch) => {
        axios.put(url + id, editedTodo).then((response) => {
            dispatch(loadData())
        })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function postData(todo){
    return (dispatch) => {
        axios.post(url, todo).then((response) => {
            dispatch(loadData())
        })
            .catch((err) => {
                console.error(err);
            })
    }
}