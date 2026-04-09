import React from 'react';
import { TodoContext } from '../../TodoContext';
import './search.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='todoSearch-container'>
      <input
        className='todoSearch'
        placeholder='Buscar Tarea'
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
