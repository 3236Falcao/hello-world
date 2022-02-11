import React, {useState, createContext} from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    //Criação da lista todos e do método settodos
    const [todos, setTodos] = useState([
        {id: 1, title: 'Ir ao mercado', done: false},
        {id: 2, title: 'Ir ao cinema', done: false},
        {id: 3, title: 'Ir ao shopping', done: false},
    ]);

    const saveTodo = todo => {
        const newTodo = {
            id: todos.length + 1,
            title: todo.title,
            done: false,
        };
        setTodos([...todos, newTodo])
    }    

    return(
        <TodoContext.Provider value={{ todos, saveTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;