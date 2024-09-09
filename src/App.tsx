
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
