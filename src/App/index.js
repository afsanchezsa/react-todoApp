import React from 'react';
import { AppUI } from './AppUI';

/*const defaulTasks = [
  { 'id': 1, 'text': 'tarea 1', 'completed': true },
  { 'id': 2, 'text': 'tarea 2', 'completed': false },
  { 'id': 3, 'text': 'tarea 3', 'completed': false }

]*/


function App() {
  const localStorageTodos=localStorage.getItem('TODOS_V1');
  let defaulTasks;
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    defaulTasks=[]
  }else{
    defaulTasks=JSON.parse(localStorage.getItem('TODOS_V1'));
  }
  const [tasks, setTasks] = React.useState(defaulTasks);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = tasks.filter(t => t.completed).length;
  const totalTodos = tasks.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = tasks;
  }else{
    searchedTodos=tasks.filter(t=>t.text.toLowerCase().includes(searchValue.toLowerCase()) )
  }

  const saveTodos=(newTodos)=>{
    setTasks(newTodos);
    localStorage.setItem('TODOS_V1',JSON.stringify(tasks))
  }
  const completeTodo=(text)=>{
    const todoIndex=tasks.findIndex(todo=>todo.text===text);
    const newTodos=[...tasks];
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  }
  const deleteTodo=(text)=>{
    const todoIndex=tasks.findIndex(todo=>todo.text===text);
    const newTodos=[...tasks];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  }
  return (
   <AppUI
   totalTodos={totalTodos}
   completedTodos={completedTodos}
   searchValue={searchValue}
   setSearchValue={setSearchValue}
   searchedTodos={searchedTodos}
   completeTodo={completeTodo}
   deleteTodo={deleteTodo}
   />
   
   );
}

export default App;
