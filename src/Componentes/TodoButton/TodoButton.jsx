import React from 'react';
import styles from './TodoButton.module.css';
import { TodoContext } from '../../TodoContext';
import { HiPlus } from 'react-icons/hi';

const TodoButton = () => {
  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      className={styles.floatingButton}
      onClick={() => setOpenModal((state) => !state)}
      aria-label='Agregar tarea'>
      <HiPlus />
    </button>
  );
};

export { TodoButton };
