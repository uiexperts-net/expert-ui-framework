import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global CSS styles
import App from './App';  // Main application component
import reportWebVitals from './reportWebVitals';  // For measuring performance
import 'bootstrap/dist/css/bootstrap.min.css';  

// Create a root for React 18
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally measure performance in your app
reportWebVitals();
