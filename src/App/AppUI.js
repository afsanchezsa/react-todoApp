import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo}){
    return(
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
          {error && <p>Hubo un error....</p>}
          {loading && <p>Estamos cargando....</p>}
          {searchedTodos.map(t => (<TodoItem key={t.id} text={t.text} completed={t.completed} onComplete={()=>completeTodo(t.text)}
          onDelete={()=>deleteTodo(t.text)}/>))}
  
        </TodoList>
        <CreateTodoButton />
  
      </React.Fragment>


    );
}

export{AppUI};