import { createContext, useReducer } from "react";

export const TodoContext = createContext(undefined);

export const TodoReducer = (state, action) => {
    if (action.type == 'ADD_TASK') {
        return {...state, todo: [...state.todo, action.payload] }
    }else if(action.type == 'DELETE_TASK'){
       let newTask = state.todo.filter((task)=>task.id != action.payload);
return {...state, todo: newTask}
    }
}


function TodoContextProvider({children}) {
    const [state, dispatch] = useReducer(TodoReducer, { todo: [] })

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider



