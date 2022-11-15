import React from "react";
import './TodoItem.css';
import { FaCheckCircle, FaRegCircle, FaTrashAlt } from "react-icons/fa"

function TodoItem(props) {



    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                {!props.completed && <FaRegCircle />}
                {props.completed && <FaCheckCircle />}
            </span>
            <div className="TodoItem--content">
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                    {props.text}
                </p>
                <p className="TodoItem-date">{props.date}</p>
            </div>

            <span className="  Icon Icon-delete"
                onClick={props.onDelete}
            >
                <FaTrashAlt/>
            </span>

        </li>
    );

}

export { TodoItem };