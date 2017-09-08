let defaultState = {
    items: []
}

let mainReducer = function (state = defaultState, action){
    let newItems = [...state.items];
    switch(action.type){
        case "LOAD_DATA":
            return {
                items: action.data
            }
        case "DELETE_ITEM":
            newItems.splice(action.index,1)
            return {
                items: newItems
            }
        case "ADD_ITEM":
            let newItem = [...state.items, action.post]
            return {
                items: newItem
            }
        case "HANDLE_EDIT":
            newItems[action.index] = action.post;
            return {
                ...state,
                items: newItems
            }
        
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;