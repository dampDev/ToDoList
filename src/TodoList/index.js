import React from "react";
import './Todolist.css'

function TodoList(props) {
    const renderFunt = props.children || props.render;
    return(
        <section className="TodoListMain">
            <div className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

        {/* {props.searchedTodos.map(todo =>props.render(todo))} */}
        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunt)}



            <ul className="TodoList">
                {props.children}
            </ul>
            </div>
           
        </section>
    );
    
}

export  {TodoList};