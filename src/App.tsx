// src/App.tsx
import React, { useState } from 'react';
import Switch from './Switch'; // Ensure the correct path
import TextField from './TextField'; // Ensure the correct path
import ToggleButton from './ToggleButton'; // Ensure the correct path
import './App.css';

const App: React.FC = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);
  const [textValue, setTextValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components Example</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Switch
          checked={switchChecked}
          onChange={() => setSwitchChecked(prev => !prev)}
        />
        <TextField
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Type something..."
        />
        <ToggleButton
          toggled={toggleOn}
          onToggle={() => setToggleOn(prev => !prev)}
        />
        <p>Switch is {switchChecked ? 'ON' : 'OFF'}</p>
        <p>Toggle Button is {toggleOn ? 'ON' : 'OFF'}</p>
        <p>TextField value: {textValue}</p>
      </header>
    </div>
  );
}

export default App;
