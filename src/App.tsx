// App.tsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RadioGroup from './component/RadioGroup';
import Rating from './component/Rating';

const App: React.FC = () => {
  const [radioValue, setRadioValue] = useState<string>('');
  const [ratingValue, setRatingValue] = useState<number>(0);

  const handleRadioChange = (value: string) => {
    setRadioValue(value);
    console.log(`Selected Radio Option: ${value}`);
  };

  const handleRatingChange = (rating: number) => {
    setRatingValue(rating);
    console.log(`Selected Rating: ${rating}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">React RadioGroup and Rating Components</h1>
      
      <div className="mb-4">
        <h3>Select an Option</h3>
        <RadioGroup
          options={['Option 1', 'Option 2', 'Option 3']}
          name="exampleRadioGroup"
          onChange={handleRadioChange}
        />
        <p>Selected Radio Option: {radioValue}</p>
      </div>

      <div className="mb-4">
        <h3>Rate this Component</h3>
        <Rating totalStars={5} onRate={handleRatingChange} />
        <p>Selected Rating: {ratingValue}</p>
      </div>
    </div>
  );
};

export default App;
