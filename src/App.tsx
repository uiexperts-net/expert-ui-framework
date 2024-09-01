import React, { useState } from 'react';
import TextFieldComponent from './components/TextFieldComponent';

const App: React.FC = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    console.log('Input Text:', value);
    setText(value);
  };

  return (
    <div>
      <h1>TextField Example</h1>
      <TextFieldComponent
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
    </div>
  );
};

export default App;
