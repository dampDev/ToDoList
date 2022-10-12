import React from "react";
import { TodoCounter } from "./TodoCounter";

// import './App.css';

const todos = [
  {text: 'reparar pc', completed: false},
  {text: 'reparar epson', completed: false},
  {text: 'revisar hp all in one', completed: false},
  {text: 'reparar laptop', completed: false},
]

function App(props) {
  return (
    <React.Fragment>
      
    <TodoCounter/>
    {/* <TodoSearch/> */}
    <input placeholder="Ejemplo"/>
    {/* <TodoList>
      {todos.map(todo =>(
        // <TodoItem/>
      ))} */}
    {/* </TodoList> */}
    {/* <CreateTodoButton/> */}
    <button>+</button>
    </React.Fragment>
  );
    
}

export default App;
