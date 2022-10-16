import React from "react";
import './TodoCounter.css';

function TodoCounter({total,completed}) {
    
    return (
        <h2 className="TodoCounter-Title" >Has Completado {completed} a de {total} ToDos</h2>
    );
}

export  {TodoCounter};