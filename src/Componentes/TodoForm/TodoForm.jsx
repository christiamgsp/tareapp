import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../TodoContext';

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValues, setNewTodoValues] = React.useState('');

  const onChange = (event) => {
    setNewTodoValues(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValues.trim().length <= 0) return;
    addTodo(newTodoValues);
    setOpenModal(false);
  };

  return (
    <form className='TodoForm-container' onSubmit={onSubmit}>
      <label className='TodoForm-label'>Nueva tarea</label>

      <input
        type='text'
        className='TodoForm-input'
        placeholder='Ej: Estudiar React'
        value={newTodoValues}
        onChange={onChange}
        autoFocus
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
