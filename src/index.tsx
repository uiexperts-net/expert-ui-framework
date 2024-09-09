import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; // You can use the same CSS file or create a new one
import Navigation from './component/Navigation'; // Adjust the import path as needed
import 'bootstrap/dist/css/bootstrap.min.css';



import './index.css';  // Global CSS styles
import App from './App';  // Main application component
import reportWebVitals from './reportWebVitals';  // For measuring performance
import 'bootstrap/dist/css/bootstrap.min.css';  

// Create a root for React 18
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component inside the root element

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    <Navigation
      links={[
        { label: 'Home', href: '/home' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]}
      activeLink="home" // Set an initial active link if needed
      onLinkClick={(link) => console.log(`Clicked link: ${link}`)} // Example handler
    />
  </React.StrictMode>
);

    <App />
  </React.StrictMode>
);


reportWebVitals();

