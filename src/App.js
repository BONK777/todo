import React, {useState, useEffect} from 'react';
import { TodoList } from './TodoList'
import './style.css'

export const App = ({ name, color }) => {

    // const [isVisible, setIsVisible] = useState(true);
    console.log(',rerender');
    const [todos, setTodos] = useState(['help', 'help2', 'help3'])
    const addTodo = todo => {
        setTodos([...todos, todo]);
    }
    const deleteTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }


    return (
        <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo}/>
        // <> 
        //     <div style={{ color: color }}>
        //         {isVisible && (`My app is here! I am ${name}`)}
        //     </div>

        // <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
        // </>
    )

};

// function f(name, file, search) {
//     console.log(name);
//     console.log(search);
//     console.log(file);
// }

// f({ name: "maxim", file: 'hello.js'})