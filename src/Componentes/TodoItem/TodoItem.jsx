import React from 'react';
import styles from './TodoItem.module.css';
import { FcOk , FcFullTrash } from "react-icons/fc"; // Probemos con estos nombres que son muy estables

const TodoItem = ({ text, done, onComplete, onDelete }) => (
  <li className={styles.todoItem}>
    <button className={styles.iconButton} onClick={onDelete}>
       <FcFullTrash /> 
    </button>

    <p className={`${styles.todoText} ${done && styles.todoTextCompleted}`}>
      {text}
    </p>

    <button className={styles.iconButton} onClick={onComplete}>
    <FcOk />
    </button>
  </li>
);

export { TodoItem };