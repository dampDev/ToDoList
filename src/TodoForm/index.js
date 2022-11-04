import React from "react";
import { TodoContext } from "../TodoContext";
function TodoForm() {
    const [newTodoValue, setNewTodoValue ] = React.useState('');
    const {
        addTodo,
        setOpenModal,


    }= React.useContext(TodoContext);

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    const onCancel=()=>{
            setOpenModal(false);
    }
    const onSutmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);


    }
    return(
        <form onSubmit={onSutmit}>
            <label>...</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
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