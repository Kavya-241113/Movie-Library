import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MoviesProvider } from '../src/MoviesContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>
);
