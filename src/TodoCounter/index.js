import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos,completedTodos} = React.useContext(TodoContext)
    
    return (
        <h2 className="TodoCounter-Title" >Has Completado {completedTodos} a de {totalTodos} ToDos</h2>
    );
}

export  {TodoCounter};