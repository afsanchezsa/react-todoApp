import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const      mytastk = [
    { 'id': 1, 'text': 'tarea 1', 'completed': true },
    { 'id': 2, 'text': 'tarea 2', 'completed': false },
    { 'id': 3, 'text': 'tarea 3', 'completed': false }
  
  ]
const TodoContex = React.createContext()
function TodoProvider(props) {
    const { item: tasks, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', mytastk);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal,setOpenModal]=React.useState(false);
    const completedTodos = tasks.filter(t => t.completed).length;
    const totalTodos = tasks.length;
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = tasks;
    } else {
        searchedTodos = tasks.filter(t => t.text.toLowerCase().includes(searchValue.toLowerCase()))
    }


    const completeTodo = (text) => {
        const todoIndex = tasks.findIndex(todo => todo.text === text);
        const newTodos = [...tasks];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }
    const deleteTodo = (text) => {
        const todoIndex = tasks.findIndex(todo => todo.text === text);
        const newTodos = [...tasks];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    }
    console.log('Render antes del useEffect')

    React.useEffect(() => {
        console.log('use effect')
    }, [])
    console.log('Render luego de Useffect')








    return (
        <TodoContex.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContex.Provider>
    )
}

export{TodoContex,TodoProvider};