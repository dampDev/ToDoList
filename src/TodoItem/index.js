import React from "react";
import './TodoItem.css';

function TodoItem(props) {

   

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
                c
            </span>
            <div>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>
            <p>{props.date}</p>
            </div>
            
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                X
            </span>
            
        </li>
    );
    
}

export  {TodoItem};