import React from 'react';
import Autocomplete from './component/Autocomplete';
import { ZButton } from './ui-framework/components/ZButton'; // Correct path to the ZButton component
const App: React.FC = () => {
  return (
    <div>
      <ZButton variant="contained" color="primary" onClick={() => alert('Button clicked!')}>
        Click Me
      </ZButton>
import React from 'react';
import Autocomplete from './component/Autocomplete';

const App: React.FC = () => {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

  return (
    <div className="container mt-5">
      <h1>Autocomplete Component Example</h1>
      <Autocomplete suggestions={suggestions} />
    </div>
  );
};

export default App;
