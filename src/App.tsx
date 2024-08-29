import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './component/Dropdown';
import Slider from './component/Slider';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleDropdownChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">React Dropdown and Slider Components</h1>
      
      <div className="mb-4">
        <h3>Select an Option</h3>
        <Dropdown
          title="Select an Option"
          options={['Option 1', 'Option 2', 'Option 3']}
          onSelect={handleDropdownChange}
        />
        <p>Selected Option: {selectedOption}</p>
      </div>

      <div className="mb-4">
        <h3>Adjust Slider</h3>
        <Slider
          min={0}
          max={100}
          step={1}
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p>Slider Value: {sliderValue}</p>
      </div>
    </div>
  );
};

export default App;
