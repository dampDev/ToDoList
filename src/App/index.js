import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUi } from "./AppUi";

// import './App.css';

// const defaultTodos = [
// {text: 'reparar pc', completed: true},
// {text: 'reparar epson', completed: false},
// {text: 'revisar hp all in one', completed: true},
// {text: 'reparar laptop', completed: false},
// ];



 

 

function App(props) {
  



  return (
    
   <TodoProvider>
     <AppUi  
    />
   </TodoProvider>
  )
    
}

export default App;
