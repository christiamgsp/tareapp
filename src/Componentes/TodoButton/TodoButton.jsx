import React from 'react';
import styles from './TodoButton.module.css'; // Asegúrate de que el nombre coincida
import { TodoContext } from '../../TodoContext';

const TodoButton = () => {
  const { setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    // 1. Aquí ejecutamos la función.
    // Usamos (state => !state) para que si es true pase a false y viceversa.
    setOpenModal((state) => !state);
  };

  return (
    /* 2. Todos los atributos van DENTRO de la etiqueta <button ... > */
    <button className={styles.addButton} onClick={onClickButton}>
      +
    </button>
  );
};

export { TodoButton };
