import React from 'react';
import ButtonComponent from './components/ButtonComponent';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Button Example</h1>
      <ButtonComponent label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default App;
