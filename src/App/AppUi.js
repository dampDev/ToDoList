import React from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  const [showAll, setShowAll] = React.useState(true);
  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <button onClick={handleShowAll} >
        {showAll ? "mostrar completados" : "Mostrar No Todos"}
      </button>
      
      <TodoList>
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
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>


      {!!openModal && (
        <Modal>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <TodoForm />
          </MuiPickersUtilsProvider>

        </Modal>
      )}


      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );

}

export { AppUi };