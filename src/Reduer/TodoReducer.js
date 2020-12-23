function Reducer(state, action) {
    switch (action.type) {
        case'intodo':
            let{todo}=action.val
            return{...state, todo}
        case'insigntodo':
            let{data}=action.val
            return{...state, data}
        case 'addtodo':
            return addtodo(state, action);
        case 'donetodo':
            return donetodo(state, action);
        case'register':
           return register(state,action);
        case 'deletetodo':
            return deletetodo(state, action);
        case 'edittodo':
            return edittodo(state, action);
        default :
            return state
    }
}

export default Reducer;

let register=(state,action)=>{
    let{data}=action.val
    return {
        ...state,
        data: [
            ...state.data,
            data
        ]
    }
}

let addtodo = (state, action) => {
    let {todo} = action.val;
    return {
        ...state,
        todo: [
            ...state.todo,
            todo
        ]
    }
}
let deletetodo = (state, action) => {
    let {key} = action.val;
    return {
        ...state,
        todo: state.todo.filter(i => i.key !== key)
    }
}
let donetodo = (state, action) => {
    let {key} = action.val;
    let item = state.todo.find(i => i.key === key);
    item.done = !item.done
    let newtodo = state.todo.filter(i => i.key !== key);
    return {
        ...state,
        todo: [
            ...newtodo,
            item
        ]
    }
}
let edittodo = (state, action) => {
    let {key, text} = action.val;
    let item = state.todo.find(i => i.key === key);
    item.text = text
    let newtodo = state.todo.filter(i => i.key !== key);
    return {
        ...state,
        todo: [
            ...newtodo,
            item
        ]
    }
}