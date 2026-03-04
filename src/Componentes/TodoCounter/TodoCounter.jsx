import React from 'react';
import { TodoContext } from '../../TodoContext';
import './Counter.css'; // Nombre de archivo nuevo

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  // Definimos un objeto de estilo para asegurar el centrado pase lo que pase
  const estilosForzados = {
    textAlign: 'center',
    display: 'block',
    width: '100%',
    margin: '0 auto',
    padding: '48px 0',
  };

  return (
    <h2 className='todoCounter' style={estilosForzados}>
      Has Completado <span>{completedTodos}</span> De <span>{totalTodos}</span>{' '}
      Tareas
    </h2>
  );
}

export { TodoCounter };
