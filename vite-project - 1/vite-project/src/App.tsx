import React, { useState } from 'react';
import './styles.css';
import { ZText } from './ui-framework/generic/Text'; // Ensure the path and file name are correct
import { ZButton } from './ui-framework/material-ui/Button'; // Ensure the path and file name are correct
import { ZRadioGroup } from './ui-framework/generic/RadioGroup'; // Ensure the path and file name are correct
import { ZCheckbox } from './ui-framework/generic/Checkbox'; // Ensure the path and file name are correct
import { ZSelect } from './ui-framework/generic/Select'; // Ensure the path and file name are correct
import { SelectChangeEvent } from '@mui/material';

function App() {
  const [curName, setCurName] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState<string>('');

  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  // Explicitly type the event parameter
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  // Explicitly type the event parameter
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="form-container">
      <div className="form-element">
        <ZText value={curName} onChange={(event) => setCurName(event.target.value)} />
      </div>
      <div className="form-element radio-group">
        <ZRadioGroup
          value={radioValue}
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
          ]}
          onChange={(event) => setRadioValue(event.target.value)}
        />
      </div>
      <div className="form-element checkbox">
        <ZCheckbox
          checked={checked}
          label="Check me"
          onChange={handleCheckboxChange} // Use the typed handler
        />
      </div>
      <div className="form-element dropdown">
        <ZSelect
          value={selectedOption}
          options={dropdownOptions}
          onChange={handleSelectChange} // Use the typed handler
        />
      </div>
      <div className="form-element">
        <ZButton />
      </div>
      <div className="form-element">
        CurName: {curName}
      </div>
    </div>
  );
}

export default App;
