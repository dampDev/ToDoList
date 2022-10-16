import React from "react";
import {CreateTodoButtom} from "./CreateTodoButtom";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

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
