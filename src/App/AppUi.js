import React from "react";
import {CreateTodoButtom} from "../CreateTodoButtom";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUi({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

}) {
    
    return (
        <React.Fragment>
        <TodoCounter
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
    
        />
        <TodoList>
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
        <CreateTodoButtom/>
        </React.Fragment>
      );
    
}

export  {AppUi};