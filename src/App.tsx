// src/App.tsx
import React, { useState } from 'react';
import RadioButton from './component/RadioButton';

function App() {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div className="container mt-5">
      <h1>RadioButton Component Example</h1>
      <RadioButton
        id="radio1"
        label="Option 1"
        name="group1"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <RadioButton
        id="radio2"
        label="Option 2"
        name="group1"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
    </div>
  );
}

export default App;
