const initialState = {
    todos:[{text:'todo itemi', list:0, id:1}, {text:'inprogress itemi', list:1, id:2},{text:'inprogress itemi2', list:1, id:4}, {text:'done  itemi', list:2, id:3}],
    lists:['Todo','In Progress', 'Done']
}

const reducer = (state = initialState, action)  => {
    switch(action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos,{text:action.todo.text, list:action.todo.list, id:state.todos[state.todos.length-1].id +1}]}
        case 'ADD_LIST': {
            return {...state, lists:[...state.lists, action.name]}
        }
        default:
            return state
    }
}

export default reducer;