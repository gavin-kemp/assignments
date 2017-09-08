//how we do it in react
// import redux from 'redux';

//in node
let redux = require('redux');
let createStore = redux.createStore;

//3 parts of redux
//1. Actions
//2. Reducer (logic goes here)
//3. Reducer takes the action, takes the old state and creates the new state/current
//state of the app
//State is part 3.


//making redux store
//takes reducer because it needs to know hwo to get the state

//Reducer

//default state
let defaultState = {
    counter: 0
};


//to reduce something it means to combine the action and state.
//setting current state to default is for when the app is first started
let mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UP":
            //do something
            // return {
            //     ...state,
            //     counter: state.counter + action.amount
            // }
            return Object.assign(state, {counter: state.counter + action.amount});
        case "DOWN":
            //in react
            // return {
            //     ...state
            //     counter: state.counter - 1
            // }
            //state refers to the current state of your application. the CURRENT data
            return Object.assign(state, {counter: state.counter - action.amount});
        default:
            return state;
    }
};

//creating the store
//has current state and the reducer which knows how to handle changes
//to current state

//action creators
//amount refers to how many it will go up in this example
//setting amount = 1 here is like setting state = defaultState so it doesn't return NaN if nothing is given
let up = (amount = 1) => {
    return {
        //also adding argument to up of how many to go up
        type: "UP",
        amount
    }
}

let down = (amount) => {
    return {
        type: "DOWN",
        amount
    }
}

const store = createStore(mainReducer);

//subscribe says when there are any changes it will call this.
//shows what's inside store
store.subscribe(()=> {
    console.log(store.getState());
});

console.log(store.getState());

//if logic is fine but it's not updating the problem is with dispatch
//dispatch takes action as arg
//dispatch calls mainReducer
//action creators always have to be dispatched
store.dispatch(up(3));
store.dispatch(down(5));

//end line