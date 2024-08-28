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
    </div>
  );
};

export default App;
