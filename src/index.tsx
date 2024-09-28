import React from 'react';

import ReactDOM from 'react-dom/client';


import ReactDOM from 'react-dom';

import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>



import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';




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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



reportWebVitals();



