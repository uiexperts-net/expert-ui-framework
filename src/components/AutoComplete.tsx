import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, List, useTheme } from 'react-native-paper';

interface AutoCompleteProps {
  suggestions: Array<{ label: string; value: any }>;
  onSelect: (value: any) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions, onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const theme = useTheme();

  const handleChange = (text: string) => {
    setQuery(text);
    setFilteredSuggestions(
      suggestions.filter(suggestion =>
        suggestion.label.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const handleSelect = (value: any, label: string) => {
    setQuery(label);
    onSelect(value);
    setFilteredSuggestions([]);
  };

  return (
    <View>
      <TextInput
        label="Search"
        value={query}
        onChangeText={handleChange}
        style={styles.input}
        theme={{ colors: { primary: theme.colors.primary } }}
      />
      {filteredSuggestions.length > 0 && (
        <View style={styles.suggestions}>
          {filteredSuggestions.map(suggestion => (
            <List.Item
              key={suggestion.value}
              title={suggestion.label}
              onPress={() => handleSelect(suggestion.value, suggestion.label)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  suggestions: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default AutoComplete;
