import React from "react";
import { TodoContext } from "../TodoContext";
function TodoForm() {
    const {
        saveTodo,

    }= React.useContext(TodoContext);

    const onCancel=()=>{
            
    }
    const onSutmit=()=>{
            
    }
    return(
        <form onSubmit={onSutmit}>
            <label>...</label>
            <textarea
            placeholder="Escribe tu tarea"
            />
            <div>
                <button 
                type="button"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button
                type="submit">
                    Anadit ToDo
                </button>
            </div>
        </form>
    )
}

export  {TodoForm};