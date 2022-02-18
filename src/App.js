import React from 'react';
import './App.css';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
const tasks=[
{'id':1,'text':'tarea 1', 'completed':false},
{'id':2,'text':'tarea 2', 'completed':false},
{'id':3,'text':'tarea 3', 'completed':false}

]


function App() {
  return (
    <React.Fragment>
  <TodoCounter/>
  
  <TodoSearch/>
  
  <TodoList>
    {tasks.map(t=>(<TodoItem key={t.id} text={t.text}/>))}
    
  </TodoList>
  <CreateTodoButton/>

  </React.Fragment>
  );
}

export default App;
