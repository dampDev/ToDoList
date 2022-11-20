import React from "react";
import './Todolist.css'

function TodoList(props) {
    const renderFunt = props.children || props.render;

    const [showAll, setShowAll] = React.useState(true);
    const handleShowAll = () => {
        setShowAll(() => !showAll)
      }
 

    return(
        
        <section className="TodoListMain">
            <div className="TodoList">
            {/* <button onClick={handleShowAll} className="rounded-xl h-7 text-orange-600	 bg-sky-500 hover:bg-sky-700">
        {showAll ? "mostrar completados" : "Mostrar Pendientes"}
      </button> */}
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

        {/* {props.searchedTodos.map(todo =>props.render(todo))} */}


        {(!props.loading && !props.error) && props.searchedTodos
        // .filter(todo => {
            
        //     if (showAll === false) {
        //       return todo.completed === true;
              
        //    }else{
        //     return todo.completed === false;
        //    }
        //   })
        .map(renderFunt)}



            <ul className="TodoList">
                {props.children}
            </ul>
            </div>
           
        </section>
    );
    
}

export  {TodoList};