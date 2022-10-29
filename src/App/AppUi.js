import React from "react";
import { TodoContext } from "../TodoContext";
import {CreateTodoButtom} from "../CreateTodoButtom";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUi() {
    
    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoContext.Consumer>
          {({ error, loading, 
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) =>{
            return(
              <TodoList>
              {error && <p>Hubo un error...</p>}
              {loading && <p>Loading, Plase weit...</p>}
              {(!loading && !searchedTodos.length) && <p>!Crea un Todo</p>}
    
              {searchedTodos.map(todo =>(
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
        
                />
              ))}
            </TodoList>
            )
          }}
        </TodoContext.Consumer>
       
        <CreateTodoButtom/>
        </React.Fragment>
      );
    
}

export  {AppUi};