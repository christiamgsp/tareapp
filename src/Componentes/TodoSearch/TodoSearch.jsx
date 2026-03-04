import React from 'react';
import { TodoContext } from '../../TodoContext';
import './search.css'; // Importación exacta del nombre de tu archivo

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    /* Usamos un contenedor para que el Flexbox del CSS lo centre fácil */
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
