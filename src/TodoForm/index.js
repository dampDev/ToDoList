import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import {DatePicker} from '@material-ui/pickers';

function TodoForm() {
    const [newTodoValue, setNewTodoValue ] = React.useState('');
    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
    console.log(fechaSeleccionada);
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
            <label>fecha</label>
            <DatePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada}/>
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