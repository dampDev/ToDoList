import React from "react";
import { useTodos } from "./useTodos";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import {TodosLoading} from "../TodosLoading"
import {TodosError} from "../TodosError"
import {EmptyTodos} from "../EmptyTodos"
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
import { alpha } from '@material-ui/core/styles'

// import './App.css';

// const defaultTodos = [
// {text: 'reparar pc', completed: true},
// {text: 'reparar epson', completed: false},
// {text: 'revisar hp all in one', completed: true},
// {text: 'reparar laptop', completed: false},
// ];



 

 

function App(props) {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
  } = useTodos();

  const [showAll, setShowAll] = React.useState(true);
  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }



  return (
    <React.Fragment>
     <TodoHeader>
     <TodoCounter 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      />
     </TodoHeader>
      <button onClick={handleShowAll} >
        {showAll ? "mostrar completados" : "Mostrar No Todos"}
      </button>
      {!!openModal && (
        <Modal>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale} style={alpha}>
            <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
          </MuiPickersUtilsProvider>

        </Modal>
      )}
      
      <TodoList
    error={error}
    loading={loading}
    searchedTodos={searchedTodos}


      onError={()=> <TodosError/>}
      onLoading={()=> <TodosLoading/>}
      onEmptyTodos={()=> <EmptyTodos/>}
      render={todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          date={todo.date}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      )

      }

      />

      

      {/* <TodoList>
        {error && <p>Hubo un error...</p>}
        {loading && <p>Loading, Plase weit...</p>}
        {(!loading && !searchedTodos.length) && <p>!Crea un Todo</p>}

        {searchedTodos
          
          .filter(todo => {
            
            if (showAll === false) {
              return todo.completed === true;
              
           }else{
            return todo.completed === false;
           }
          })
          .map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              date={todo.date}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList> */}


      


      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
    
}

export default App;
