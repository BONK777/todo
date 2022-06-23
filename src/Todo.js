import React from 'react';
import './style.css'

export const Todo = ({ text, handleClick }) => {
    return (
        <div onClick={handleClick} className="todo">{text}</div>
    )
}