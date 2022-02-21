import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContex } from '../TodoContex'
import { Modal } from "../components/Modal";
function AppUI() {

  const value = React.useContext(TodoContex)
  const { error, loading, searchedTodos, completeTodo, deleteTodo,openModal,setOpenModal } = value

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />



      <TodoList>
        {error && <p>Hubo un error....</p>}
        {loading && <p>Estamos cargando....</p>}
        {searchedTodos.map(t => (<TodoItem key={t.id} text={t.text} completed={t.completed} onComplete={() => completeTodo(t.text)}
          onDelete={() => deleteTodo(t.text)} />))}

      </TodoList>

      
      {openModal&& (
        <Modal>
        <p>Teletransportacion{searchedTodos[0]?.text}</p>
      </Modal>
      )}
      <CreateTodoButton
      setOpenModal={setOpenModal} />

    </React.Fragment>


  );
}

export { AppUI };