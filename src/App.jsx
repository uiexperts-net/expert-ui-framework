import React, { useState } from 'react';
import RadioButton from './components/Radio';
import List from './components/List.tsx';
import './App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <h1>Radio Button Demo</h1>
      <div>
        <RadioButton
          id="option1"
          name="options"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleChange}
          label="Option 1"
        />
        <RadioButton
          id="option2"
          name="options"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleChange}
          label="Option 2"
        />
        <RadioButton
          id="option3"
          name="options"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleChange}
          label="Option 3"
        />
      </div>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};
function App() {
  const items = ['Apple', 'Banana', 'Cherry'];

  const handleItemClick = (item: string) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <div>
      <h1>My List</h1>
      <List items={items} onItemClick={handleItemClick} />
    </div>
  );
}


export default App;
