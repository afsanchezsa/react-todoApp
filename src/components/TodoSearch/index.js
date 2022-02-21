import React from 'react';
import './TodoSearch.css';
import {TodoContex} from '../../TodoContex'

function TodoSearch() {


  const {searchValue,setSearchValue}=React.useContext(TodoContex)
  const onSearchValueChange=(event)=>{
    setSearchValue(event.target.value);
  }
  return (<React.Fragment>
    <input className="TodoSearch" 
    placeholder="Cebolla"
    onChange={onSearchValueChange} 
    />
    <p>
      {searchValue}
    </p>
    </React.Fragment>
  );
}

export { TodoSearch };