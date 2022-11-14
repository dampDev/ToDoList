import React, { useState } from "react";

import {DatePicker} from '@material-ui/pickers';


function TodoForm({addTodo,setOpenModal}) {
    const [newTodoValue, setNewTodoValue ] = React.useState('');
    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
    
    
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    const onCancel=()=>{
            setOpenModal(false);
    }
    const onSutmit=(event)=>{
        event.preventDefault();
        addTodo(fechaSeleccionada.toLocaleDateString(), newTodoValue);
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