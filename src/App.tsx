// src/App.tsx

import React from 'react';
import './App.css';
import { ZAutocomplete } from './components/ZAutocomplete';

const App: React.FC = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <h1>Autocomplete Component</h1>
      <ZAutocomplete options={options} label="Select an option" />
    </div>
  );
};

export default App;
