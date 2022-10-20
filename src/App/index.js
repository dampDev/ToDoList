import React from "react";

import { AppUi } from "./AppUi";

// import './App.css';

const defaultTodos = [
  {text: 'reparar pc', completed: true},
  {text: 'reparar epson', completed: false},
  {text: 'revisar hp all in one', completed: true},
  {text: 'reparar laptop', completed: false},
]

function App(props) {
  const[todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos=todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos=[];

  if(!searchValue.length>=1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);

    });
    
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed= true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }



  return (
    <AppUi
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
    
}

export default App;
