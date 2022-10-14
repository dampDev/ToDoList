import React from "react";
import {CreateTodoButtom} from "./CreateTodoButtom";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

// import './App.css';

const todos = [
  {text: 'reparar pc', completed: true},
  {text: 'reparar epson', completed: false},
  {text: 'revisar hp all in one', completed: false},
  {text: 'reparar laptop', completed: false},
]

function App(props) {
  return (
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      {todos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}

        />
      ))}
    </TodoList>
    <CreateTodoButtom/>
    </React.Fragment>
  );
    
}

export default App;
