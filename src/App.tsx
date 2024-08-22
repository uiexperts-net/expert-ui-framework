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
    </div>
  );
}

export default App;
