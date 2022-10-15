import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    const onComplete = ()=> {
        alert('ya completaste la Tarea '+ props.text);
    };

    const onDelete = ()=> {
        alert('Eliminaste la Tarea '+ props.text);
    };

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onComplete}
            >
                c
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
            onClick={onDelete}
            >
                X
            </span>
        </li>
    );
    
}

export  {TodoItem};