import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS here, Tailwind directives are here.
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);