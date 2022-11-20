import React, { useState } from "react";
import './TodoForm.css'
import {FaRegCalendarAlt,FaRegCircle} from 'react-icons/fa'
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
        <form onSubmit={onSutmit} className="form-container" >
            <div className="textArea-container">
            <label><FaRegCircle /></label>
            <textarea
            className="form-textArea"
            value={newTodoValue}
            onChange={onChange}
            placeholder="Escribe tu tarea"
            />
            </div>
            
            <div className="calender-container">
            <FaRegCalendarAlt/>
            <DatePicker 
            className="Datepicker"
            value={fechaSeleccionada} 
            onChange={cambiarFechaSeleccionada}/>
            <div>
                {/* <button 
                type="button"
                onClick={onCancel}>
                    Cancelar
                </button> */}
                <button className="submit-button"
                type="submit">
                    Add
                </button>
            </div>
            </div>
            
            
        
        </form>
    )
}

export  {TodoForm};