export function loadData(data){
    return {
        type:"LOAD_DATA",
        data: [
            {
                name: "whatever",
                lastName: "whatever",
                thing: "thing"
            },
            {
                name: "whatever2",
                lastName: "whatever2",
                thing: "thing2"
            },
            {
                name: "whatever3",
                lastName: "whatever3",
                thing: "thing3"
            },
            {
                name: "whatever4",
                lastName: "whatever4",
                thing: "thing4"
            }
        ]
    }
}

export function deleteItem(index){
    return {
        type: "DELETE_ITEM",
        index: index
    }
}

export function addItem(post){
    return {
        type: "ADD_ITEM",
        post: post
    }
}

export function handleEdit(post, index){
    return {
        type: "HANDLE_EDIT",
        post,
        index
    }
}