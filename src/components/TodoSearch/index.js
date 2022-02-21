import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}) {



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