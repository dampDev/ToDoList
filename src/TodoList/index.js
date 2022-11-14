import React from "react";
import './Todolist.css'

function TodoList(props) {
    return(
        <section className="TodoListMain">
            <div className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

        {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

        {/* {props.searchedTodos.map(todo =>props.render(todo))} */}
        {props.searchedTodos.map(props.render)}



            <ul className="TodoList">
                {props.children}
            </ul>
            </div>
           
        </section>
    );
    
}

export  {TodoList};