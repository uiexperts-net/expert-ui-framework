// src/App.tsx
import React from 'react';
import TextFieldComponent from './components/TextFieldComponent';

const App: React.FC = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>TextFieldComponent Demo</h1>
      <TextFieldComponent 
        label="Enter Text" 
        value={value} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
    </div>
  );
};

export default App;
