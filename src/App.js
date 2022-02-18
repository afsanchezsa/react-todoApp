import React from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
const defaulTasks = [
  { 'id': 1, 'text': 'tarea 1', 'completed': true },
  { 'id': 2, 'text': 'tarea 2', 'completed': false },
  { 'id': 3, 'text': 'tarea 3', 'completed': false }

]


function App() {
  const [tasks, setTasks] = React.useState(defaulTasks);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = tasks.filter(t => t.completed).length;
  const totalTodos = tasks.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = tasks;
  }else{
    searchedTodos=tasks.filter(t=>t.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) )
  }
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
        {searchedTodos.map(t => (<TodoItem key={t.id} text={t.text} completed={t.completed} />))}

      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
