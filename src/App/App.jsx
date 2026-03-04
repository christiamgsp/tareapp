import React from 'react';
import { TodoProvider } from '../TodoContext'; // Importamos el nuevo provider
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
