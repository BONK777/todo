import React, {useState} from 'react';
import { Todo } from './Todo'
import './style.css'
import cat from './cat.png' 

export const TodoList = ({ todos, addTodo, deleteTodo}) => {
    const [value, setValue] = useState('')
    const handleInput = e => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className="box">
            <input className="inputTodo" value={value} onInput={handleInput} onKeyDown={(e) => {
               if (e.key == 'Enter') {
                   addTodo(value)
                   setValue('')
               } 
                
            } } />


            {todos.map((todo, index) => {
                return <Todo text={`${index}. ${todo}`} handleClick={()=>deleteTodo(index)} key={index}/>
            })}
            <div><img src={cat}></img>{value}</div>
            
        </div>
    ) 
}