import React from 'react';
import './css/TodoSearch.css';

function TodoSearch() {

  const [searchValue,setSearchValue]=React.useState('');

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