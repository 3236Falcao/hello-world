import React, { useState } from "react";


const App = () => {
    //Criação da lista todos e do método settodos
    const [todos, setTodos] = useState([
        {id: 1, title: 'Ir ao mercado', done: false},
        {id: 2, title: 'Ir ao cinema', done: false},
        {id: 3, title: 'Ir ao shopping', done: false},
    ]);
    const [todo, setTodo] = useState();

    //Manipula o submite do formulério
    const handleFormSubmit = e => {
        e.preventDefault();
        setTodos([
            ...todos,
            todo,
        ]);
    }

    //disparada toda vez que um campo do formulário for alterado
    const handleInputChange = e => {        
        setTodo({
            ...todo,
            id: todos.length + 1,
            title: e.target.value,
            done: false,
        })
        console.log(todo);
    }

    return(
        <div>
            {
                todos.map(i => (
                    <div key={i.id}>{i.title}</div>
                ))
            }        
            <br />
            <br />
            <br />
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="todo" 
                    id="title" 
                    placeholder="Nova tarefa..."
                    onChange={handleInputChange} />
                <button>ADICIONAR</button>
            </form>
        </div>
    );
}

export default App;