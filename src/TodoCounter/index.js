import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos,completedTodos,loading}) {
    
    
    return (
        <h2 
        className={`TodoCounter-Title ${!!loading && "TodoCounter--loading"} `}
        >
            Has Completado {completedTodos} a de {totalTodos} ToDos</h2>
    );
}

export  {TodoCounter};