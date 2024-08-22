// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // This should match the file name exactly
import './index.css'; // Ensure this file exists

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
