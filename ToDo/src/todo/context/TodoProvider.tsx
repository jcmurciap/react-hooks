import {useReducer} from "react";
import {TodoContext} from "./TodoContext";
import {TodoState} from "../interfaces/interfaces";
import {todoReducer} from "./todoReducer";

const INITIAL_STATE:TodoState = {
    todos: [
    {
        id: '1',
        description: 'Recolectar las piedras del infinito',
        completed: false
    },
    {
        id: '2',
        description: 'Hacer curso de React de FH',
        completed: false
    }],
    todoCount: 2,
    completed: 0,
    pending: 2,
}

interface props {
    children: JSX.Element | JSX.Element[]
    //JSX.Element[] => Por si va mas de una clase HTML "div, spam, ul" de todos.
}

export const TodoProvider = ({children}:props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id:string) => {
        dispatch({ type:'toggleTodo', payload:{id} });
    }

    return (
        <TodoContext.Provider value={{
            todoState, toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
