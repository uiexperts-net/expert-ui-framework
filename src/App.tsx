

import React from 'react';
import ButtonGroup from './component/ButtonGroup';

function App() {
  const handleButtonClick = (button: string) => {
    alert(`${button} clicked`);
  };

  return (
    <div className="App">
      <h1>Button Group Example</h1>
      <ButtonGroup buttons={['Button 1', 'Button 2', 'Button 3']} onClick={handleButtonClick} />
=======

import React from 'react';
import Button from './component/Button';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Button Component Example</h1>
      <Button label="Primary Button" onClick={() => alert('Button Clicked!')} />
    </div>
  );
};

export default App;


import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======

// src/App.tsx
import React from 'react';
import Navbar from './components/conformation'; // Adjust the import path based on your folder structure
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <Container
        sx={{
          height: '100vh', // Full viewport height
          display: 'flex', // Flexbox for centering
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        <Box sx={{ textAlign: 'center' }}>

          <img src="/assets/close.png" alt="check" style={{ width: 81, height: 75 }} />
          <Typography variant="h6" component="h1" gutterBottom>
          Group “name”  has not been created

          <img src="/assets/check.png" alt="check" style={{ width: 81, height: 75 }} />
          <Typography variant="h6" component="h1" gutterBottom>
            Group "name" has been created successfully

          </Typography>
          <Box>
            <Typography variant="body1" color="textSecondary"></Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};





import React from 'react';
import Hmgrp from './Components/ContactList';

function App() {
  return (
    <div className="App">
      <Hmgrp />

    </div>
  );
}


export default App;
=======


import React from 'react';
import ContactDetail from './Components/Contactdetail';

function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <ContactDetail name="Priyadharshini T" phoneNumber="9344334333" />


import React from 'react';
import './App.css';
import TableComponent from './component/TableComponent';
 // Import the TableComponent

function App() {
  // Sample data to display in the table
  const headers = ['ID', 'Name', 'Age'];
  const data = [
    [1, 'John Doe', 28],
    [2, 'Jane Smith', 32],
    [3, 'Mark Taylor', 25],
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Table Component Demo</h1>
        {/* Render the TableComponent with sample headers and data */}
        <TableComponent title="Employee Data" headers={headers} data={data} />
      </header>


import React, { useState } from 'react';
import LayoutComponent from './component/LayoutComponent';

function App() {
  const [message, setMessage] = useState('Click the button!');

  const handleClick = () => {
    setMessage('Button clicked!');

// src/App.tsx

import React from 'react';
import Navigation from './component/Navigation'; // Adjust the import path if needed

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation
        links={[
          { label: 'Home', href: '/home' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeLink="/home" // Adjust as needed
        onLinkClick={() => {}}
      />
      {/* Other components */}


import React, { useState } from 'react';
import Surface from './component/Surface';

function App() {
  const [content, setContent] = useState('Default Content');

  const handleChangeContent = () => {
    setContent(content === 'Default Content' ? 'Updated Content' : 'Default Content');


import React, { useState } from 'react';
import DataDisplay from './component/DataDisplay';

function App() {
  const [data, setData] = useState<string | number | Array<string | number>>('Initial data');

  // Example function to update the data
  const updateData = () => {
    setData(['Item 1', 'Item 2', 'Item 3']);


  };

  return (
    <div className="container mt-5">
      <h1>Layout Component Example with Clickable Button</h1>
      <LayoutComponent
        header={<h1>Header Section</h1>}
        content={
          <div>
            <p>{message}</p>
            <button className="btn btn-primary" onClick={handleClick}>
              Click Me
            </button>
          </div>
        }
        footer={<p>Footer Section</p>}
      />


      <h1>Surface Component Example</h1>
      <button className="btn btn-primary mb-3" onClick={handleChangeContent}>
        Toggle Content
      </button>
      <Surface
        color="lightblue"
        width="300px"
        height="200px"
      >
        {content}
      </Surface>

      <h1>Data Display Component Example</h1>
      <button className="btn btn-primary mb-3" onClick={updateData}>
        Update Data
      </button>
      <DataDisplay
        title="Current Data"
        data={data}


import React, { useState } from 'react';
import Feedback from './component/Feedback';

function App() {
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' | 'info' }>({
    message: 'Initial feedback message.',
    type: 'info', // Initial type
  });

  // Example function to update the feedback
  const updateFeedback = () => {
    setFeedback({
      message: 'This is an updated feedback message.',
      type: 'success', // Updated type
    });

import React from 'react';
import ButtonComponent from './components/ButtonComponent';
const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');

  };
  return (
    <div className="container mt-5">
      <h1>Feedback Component Example</h1>
      <button className="btn btn-primary mb-3" onClick={updateFeedback}>
        Change Feedback
      </button>
      <Feedback
        message={feedback.message}
        type={feedback.type}

      />
    </div>
  );
}
    <div>
      <h1>Button Example</h1>
      <ButtonComponent label="Click Me" onClick={handleClick} />
          </div>
  );
};


export default App;


