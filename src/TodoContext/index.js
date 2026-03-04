import React from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.done).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const donetask = (text) => {
    const tareaIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos[tareaIndex] = { ...newTodos[tareaIndex], done: true };
    saveTodos(newTodos);
  };

  const deleteTask = (text) => {
    const tareaIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos.splice(tareaIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        donetask,
        deleteTask,
        openModal,
        setOpenModal,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
