import React from 'react';
import { AppUI } from './AppUI';
const      mytastk = [
  { 'id': 1, 'text': 'tarea 1', 'completed': true },
  { 'id': 2, 'text': 'tarea 2', 'completed': false },
  { 'id': 3, 'text': 'tarea 3', 'completed': false }

]

function useLocalStorage(itemName,initialValue){
  const [error,setError]=React.useState(false)
  const [loading,setLoading]=React.useState(true)
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(()=>{
    setTimeout(()=>{
try{
  
  const localStorageItem=localStorage.getItem(itemName);
  let parsedItem;
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem=initialValue
  }else{
      parsedItem=JSON.parse(localStorage.getItem(itemName));
  }
  setItem(parsedItem)
  setLoading(false)
}catch(error){
  setError(error)
}
    },1000)
  })

  

  const saveItem=(newItem)=>{
    try{
      setItem(newItem);
    localStorage.setItem(itemName,JSON.stringify(newItem))
    }catch(error){
      setError(error)
    }

  }

  return {item,saveItem,loading,error};
}

function App() {
  
  const {item:tasks,saveItem:saveTodos,loading,error}=useLocalStorage('TODOS_V1',mytastk);
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
  console.log('Render antes del useEffect')

  React.useEffect(()=>{
    console.log('use effect')
  },[])
  console.log('Render luego de Useffect')
  return (
   <AppUI
   loading={loading}
   error={error}
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
