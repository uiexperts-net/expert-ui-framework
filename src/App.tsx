import React from 'react';
import ButtonGroup from './component/ButtonGroup';
import Autocomplete from './component/Autocomplete';
import { ZButton } from './ui-framework/components/ZButton'; // Adjust path if necessary

const App: React.FC = () => {
  // Handler for ButtonGroup clicks
  const handleButtonClick = (button: string) => {
    alert(`${button} clicked`);
  };

  // Suggestions for the Autocomplete component
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

  return (
    <div className="App">
      {/* ButtonGroup Example */}
      <h1>Button Group Example</h1>
      <ButtonGroup buttons={['Button 1', 'Button 2', 'Button 3']} onClick={handleButtonClick} />

      {/* Autocomplete Component Example */}
      <div className="container mt-5">
        <h1>Autocomplete Component Example</h1>
        <Autocomplete suggestions={suggestions} />
      </div>

      {/* ZButton Example */}
      <div className="container mt-5">
        <ZButton variant="contained" color="primary" onClick={() => alert('Button clicked!')}>
          Click Me
        </ZButton>
      </div>
    </div>
  );
};

export default App;
