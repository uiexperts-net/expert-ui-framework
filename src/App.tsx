import React from 'react';

import DropdownComponent, { DropdownOption } from './components/DropdownComponent';

const App: React.FC = () => {
  const options: DropdownOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <div>
      <h1>Dropdown Example</h1>
      <DropdownComponent options={options} onSelect={handleSelect} placeholder="Select an option" />

import './App.css';
import { ZAutocomplete } from './components/ZAutocomplete';

const App: React.FC = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <h1>Autocomplete Component</h1>
      <ZAutocomplete options={options} label="Select an option" /
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
