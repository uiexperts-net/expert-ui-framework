
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
=======
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

=======
    <div>
      <h1>Button Example</h1>
      <ButtonComponent label="Click Me" onClick={handleClick} />
          </div>
  );
};

export default App;
