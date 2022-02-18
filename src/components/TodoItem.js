import React from 'react';
import './css/TodoItem.css';

function TodoItem(props) {
  const onComplete=()=>{
    //alert("Tarea Completada:"+ props.text);
    props.onComplete();
  }

  const onDelete=()=>{
    props.onDelete();
  
  }


  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelete}
      >

        X
      </span>
    </li>
  );
}

export { TodoItem };