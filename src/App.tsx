
import React from 'react';
import Autocomplete from './components/Autocomplete/Autocomplete';
import './App.css';

function App() {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry','Fig','Guava','Hazelnuts','Imbu','Jackfruit','Kiwi','Lemon','Mango','Neem','Olive'];

import React, { useState } from 'react';
import CheckboxComponent from './component/CheckboxComponent'; // Adjust the path based on your folder structure

const App: React.FC = () => {
  // State management for multiple checkboxes
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState<boolean>(false);

  // Handle changes for the checkboxes
  const handleAcceptTermsChange = (checked: boolean) => {
    setAcceptTerms(checked);
  };

  const handleSubscribeNewsletterChange = (checked: boolean) => {
    setSubscribeNewsletter(checked);
  };

  return (
    <div>
      <h1>Generic Checkbox Example</h1>

      {/* Checkbox for accepting terms */}
      <CheckboxComponent
        label="Accept Terms and Conditions"
        checked={acceptTerms}
        onChange={handleAcceptTermsChange}
      />
      <p>{acceptTerms ? "You have accepted the terms." : "You have not accepted the terms."}</p>

      {/* Checkbox for subscribing to a newsletter */}
      <CheckboxComponent
        label="Subscribe to Newsletter"
        checked={subscribeNewsletter}
        onChange={handleSubscribeNewsletterChange}
      />
      <p>{subscribeNewsletter ? "Subscribed to the newsletter." : "Not subscribed to the newsletter."}</p>
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

      <Autocomplete suggestions={suggestions} />
    </div>
  );
}

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
