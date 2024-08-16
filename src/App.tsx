import React, { useState } from 'react';
import './styles.css';
import { ZText } from './ui-framework/generic/Text';
import { ZButton } from './ui-framework/generic/Button';
import { ZRadioGroup } from './ui-framework/generic/RadioGroup';
import { ZCheckbox } from './ui-framework/generic/Checkbox';
import { ZSelect } from './ui-framework/generic/Select';

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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

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
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="form-element dropdown">
        <ZSelect
          value={selectedOption}
          options={dropdownOptions}
          onChange={handleSelectChange}
        />
      </div>
      <div className="form-element">
        <ZButton text="Submit" onClick={() => alert('Button clicked!')} />
      </div>
      <div className="form-element">
        CurName: {curName}
      </div>
    </div>
  );
}

export default App;
