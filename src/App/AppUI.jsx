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

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    donetask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
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

        {error && <p>Error de carga, inténtelo de nuevo</p>}

        {!loading && searchedTodos.length === 0 && (
          <p className='Todo-first-message'>¡Crea tu primera tarea!</p>
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
