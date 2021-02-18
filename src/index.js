import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { AxiosProvider } from './contexts/AxiosContext';
import { TodoProvider } from './contexts/TodoContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AxiosProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </AxiosProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
