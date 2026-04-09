import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../Componentes/TodoCounter/TodoCounter';
import { TodoSearch } from '../Componentes/TodoSearch/TodoSearch';
import { TodoList } from '../Componentes/TodoList/TodoList';
import { TodoItem } from '../Componentes/TodoItem/TodoItem';
import { TodoButton } from '../Componentes/TodoButton/TodoButton';
import { TodoSkeleton } from '../Componentes/TodoSkeleton/TodoSkeleton';
import { TodoForm } from '../Componentes/TodoForm/TodoForm';
import { Modal } from './modal/modal';
import { HiMoon, HiSun } from 'react-icons/hi';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    totalTodos,
    searchValue,
    donetask,
    deleteTask,
    openModal,
    setOpenModal,
    darkMode,
    setDarkMode,
  } = React.useContext(TodoContext);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      'data-theme',
      !darkMode ? 'dark' : 'light'
    );
  };

  return (
    <>
      <button className='theme-toggle' onClick={toggleTheme}>
        {darkMode ? <HiSun /> : <HiMoon />}
      </button>

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
          </>
        )}

        {error && (
          <p className='error-text'>Error de carga, inténtelo de nuevo</p>
        )}

        {/* CASO 1: Lista totalmente vacía (Primera vez) */}
        {!loading && totalTodos === 0 && (
          <div className='empty-state-container'>
            <button
              className='Todo-first-message'
              onClick={() => setOpenModal(true)}>
              ¡Crea tu primera tarea!
            </button>
          </div>
        )}

        {/* CASO 2: Hay tareas, pero la búsqueda no coincide con ninguna */}
        {!loading && totalTodos > 0 && searchedTodos.length === 0 && (
          <div className='empty-state-container'>
            <p className='empty-text'>
              No se encontraron resultados para: "{searchValue}"
            </p>
          </div>
        )}

        {!loading &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              done={todo.done}
              onComplete={() => donetask(todo.text)}
              onDelete={() => deleteTask(todo.text)}
            />
          ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoButton />
    </>
  );
}

export { AppUI };
