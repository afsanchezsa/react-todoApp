import React from 'react';
import { AppUI } from './AppUI';
const      mytastk = [
  { 'id': 1, 'text': 'tarea 1', 'completed': true },
  { 'id': 2, 'text': 'tarea 2', 'completed': false },
  { 'id': 3, 'text': 'tarea 3', 'completed': false }

]

function useLocalStorage(itemName,initialValue){
  
  const localStorageItem=localStorage.getItem(itemName);
  let parsedItem;
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem=initialValue
  }else{
      parsedItem=JSON.parse(localStorage.getItem(itemName));
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem=(newItem)=>{
    setItem(newItem);
    localStorage.setItem(itemName,JSON.stringify(newItem))
  }

  return [item,saveItem];
}

function App() {
 
  const [tasks,saveTodos]=useLocalStorage('TODOS_V1',mytastk);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = tasks.filter(t => t.completed).length;
  const totalTodos = tasks.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = tasks;
  }else{
    searchedTodos=tasks.filter(t=>t.text.toLowerCase().includes(searchValue.toLowerCase()) )
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
