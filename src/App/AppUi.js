import React from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";

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

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error...</p>}
        {loading && <p>Loading, Plase weit...</p>}
        {(!loading && !searchedTodos.length) && <p>!Crea un Todo</p>}

        {searchedTodos.map(todo => (
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
        <TodoForm/>
      </Modal>
      )}


      <CreateTodoButtom 
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );

}

export { AppUi };