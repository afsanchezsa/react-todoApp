import React from "react";
import { TodoContex } from "../../TodoContex";
import './TodoForm.css'
function TodoForm(){

    const[newTodoValue,setNewTodoValue]=React.useState('')


    const {addTodo,setOpenModal}=React.useContext(TodoContex)
    const onChange=(event)=>{
        setNewTodoValue(event.target.value)
        
    }
    const onCancel=(event)=>{
    setOpenModal(false);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo To DO</label>
            <textarea value={newTodoValue}
            onChange={onChange} placeholder="CORTAR LA CEBOLLA PARA EL ALMUERZO"/>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add" >Añadir</button>
            </div>
        </form>
    );

}
export {TodoForm}