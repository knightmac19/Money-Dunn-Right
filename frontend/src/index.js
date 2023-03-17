import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TransactionsContextProvider } from './context/TransactionContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TransactionsContextProvider>
        <App />
      </TransactionsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
