import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos,completedTodos}) {
    
    
    return (
        <h2 className="TodoCounter-Title" >Has Completado {completedTodos} a de {totalTodos} ToDos</h2>
    );
}

export  {TodoCounter};