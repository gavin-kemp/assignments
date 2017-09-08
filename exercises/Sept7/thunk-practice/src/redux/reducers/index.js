let initialState = {
    todos: []
};

let mainReducer = function(state= initialState, action){
    switch(action.type) {
        case "SET_DATA":
            return {
                todos: action.todos,
            }
        default:
            return {
                ...state,
            }
    }
};

export default mainReducer;