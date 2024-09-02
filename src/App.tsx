import React, { useState } from 'react';
import Checkbox from './component/Checkbox';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="container mt-5">
      <h1>Checkbox Component Example</h1>
      <div className="form-check">
        <Checkbox
          label="Accept terms and conditions"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default App;
