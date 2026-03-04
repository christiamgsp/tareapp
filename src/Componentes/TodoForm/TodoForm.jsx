import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../TodoContext';

function TodoForm() {
  // 1. Los Hooks SIEMPRE van al principio del componente
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValues, setNewTodoValues] = React.useState('');

  // 2. Definimos las funciones de manejo por separado
  const onChange = (event) => {
    setNewTodoValues(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValues); // Ahora sí reconoce la variable
    setOpenModal(false);
  };

  return (
    <form className='TodoForm-container' onSubmit={onSubmit}>
      <label className='TodoForm-label'>Escribe tu nueva tarea</label>

      <input
        type='text'
        className='TodoForm-input'
        placeholder='Reservar mesa para cenar'
        value={newTodoValues} // Ahora existe para el input
        onChange={onChange} // Ahora existe para el input
      />

      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button taskbtn-cancel'
          onClick={onCancel}>
          Cancelar
        </button>

        <button type='submit' className='TodoForm-button taskbtn-add'>
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
