import React, { useState } from 'react';

export interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    setInputValue(userInput);

    const filtered = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleChange}
      />
      {showSuggestions && inputValue && (
        <ul className="list-group">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => handleClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
