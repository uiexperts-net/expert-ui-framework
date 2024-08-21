// src/App.tsx
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
