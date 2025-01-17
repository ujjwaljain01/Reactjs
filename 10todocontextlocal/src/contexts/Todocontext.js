import {createContext , useContext} from "react"

export const todoContext = createContext({
    Todos: [
        {
            id: 1,
            title: "hello",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (title , id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}


export const TodoProvider = todoContext.Provider