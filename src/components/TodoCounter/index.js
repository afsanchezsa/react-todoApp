import React from 'react';
import './TodoCounter.css';
import {TodoContex} from '../../TodoContex'

function TodoCounter() {
  const {
    totalTodos,
    completedTodos
  }=React.useContext(TodoContex);
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };