let redux = require('redux');
let createStore = redux.createStore;

//action
//reducer
//state

let defaultState = {
    comments: []
}

let post = (comment) => {
    return {
        type: "POST",
        comment
    }
}

let mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "POST":
        //copying array. after comma in array is what you want to add
        let newArray = [...state.comments, action.comment]
        //return  {...state, comments: newArr}
            return Object.assign(state, {comments: newArray});
        default:
            return state;
    }
}

let store = createStore(mainReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(post("whatever qwflknqweklj"));