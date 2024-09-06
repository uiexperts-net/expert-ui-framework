import React, { useState } from 'react';
import DataDisplay from './component/DataDisplay';

function App() {
  const [data, setData] = useState<string | number | Array<string | number>>('Initial data');

  // Example function to update the data
  const updateData = () => {
    setData(['Item 1', 'Item 2', 'Item 3']);
  };

  return (
    <div className="container mt-5">
      <h1>Data Display Component Example</h1>
      <button className="btn btn-primary mb-3" onClick={updateData}>
        Update Data
      </button>
      <DataDisplay
        title="Current Data"
        data={data}
      />
    </div>
  );
}

export default App;
