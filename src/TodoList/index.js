import React from "react";
import './Todolist.css'

function TodoList(props) {
    return(
        <section className="TodoListMain">
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    );
    
}

export  {TodoList};