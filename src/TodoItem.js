import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span>c</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
    
}

export  {TodoItem};