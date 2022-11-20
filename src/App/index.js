import React from "react";
import { useTodos } from "./useTodos";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodosLoading } from "../TodosLoading"
import { TodosError } from "../TodosError"
import { EmptyTodos } from "../EmptyTodos"
import { TodoItem } from "../TodoItem";
import { TodoList,TodoListComplet} from "../TodoList";
import { TodoSearch } from "../TodoSearch";
// import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlert } from "../ChangeAlert";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
import { alpha } from '@material-ui/core/styles'



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
    sincronizeTodos
  } = useTodos();

  


  return (
    <React.Fragment>
      
   
      <TodoHeader  loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}

        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />

{!!openModal && (
        
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale} style={alpha}>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </MuiPickersUtilsProvider>

      
    )}

      </TodoHeader>
      
      {/* {!!openModal && (
        <Modal>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale} style={alpha}>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </MuiPickersUtilsProvider>

        </Modal>
      )} */}

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={ 
          (searchText) =><p>no hay resultados para {searchText}</p>
        }
        
// render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
        >
        {todo => (
          
          <TodoItem
            key={todo.text}
            text={todo.text}
            date={todo.date}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      
      <TodoListComplet
          

        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={ 
          (searchText) =><p>no hay resultados para {searchText}</p>
        }
        
        >
          
        {todo => (
                    
          <TodoItem
            key={todo.text}
            text={todo.text}
            date={todo.date}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoListComplet>
      
   


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

      <ChangeAlert
      sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );

}

export default App;
