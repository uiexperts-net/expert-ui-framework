import React, { useState } from 'react';
import LayoutComponent from './component/LayoutComponent';

function App() {
  const [message, setMessage] = useState('Click the button!');

  const handleClick = () => {
    setMessage('Button clicked!');
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
    </div>
  );
}

export default App;
